// Komponenty v Markdownu: komentář <!-- komponenta: … --> v content/stranky/*.md označuje místo,
// kam šablona vloží datovou komponentu, nebo jak má upravit HTML, které po komentáři následuje.
import { url } from './url';

export type Klic =
  | 'cenik' | 'sady-skills' | 'pluginy' | 'tiny' | 'infografika-mcp' | 'instrukce' // datové komponenty (Astro)
  | 'zalozky' | 'nahledy' | 'tabulka-karty' // úprava následujícího HTML
  | 'teze' | 'casova-osa' | 'matice' | 'karty-nastroju' | 'zdroje-nastroju'; // stránka Změny funkcí

const MAPA: [RegExp, Klic][] = [
  [/karty tarifů/, 'cenik'],
  [/infografika MCP/, 'infografika-mcp'],
  [/animace instrukcí/, 'instrukce'],
  [/dlaždice sad a skills/, 'sady-skills'],
  [/karty sad/, 'pluginy'],
  [/tabulka žákovský prompt/, 'tiny'],
  [/záložky podle nástroje/, 'zalozky'],
  [/karty s náhledem/, 'nahledy'],
  [/tabulka, na mobilu karty/, 'tabulka-karty'],
  [/tři teze/, 'teze'],
  [/časová osa/, 'casova-osa'],
  [/matice/, 'matice'],
  [/karty nástrojů/, 'karty-nastroju'],
  [/zdroje \(data\.zdroje\)/, 'zdroje-nastroju'],
];

export type Cast = { typ: 'html'; html: string } | { typ: 'komponenta'; klic: Klic };

const PREVOD: Partial<Record<Klic, (html: string, id: string) => string>> = {
  zalozky: naZalozky,
  nahledy: naNahledy,
  'tabulka-karty': naTabulkuKaret,
};

export function rozdel(html: string): Cast[] {
  const casti: Cast[] = [];
  const re = /<!--\s*komponenta:\s*([\s\S]*?)-->/g;
  let posledni = 0;
  let prevod: ((h: string, id: string) => string) | null = null;
  let n = 0;
  const pridejHtml = (h: string) => {
    if (prevod) { h = prevod(h, `komponenta-${n++}`); prevod = null; }
    if (h.trim()) casti.push({ typ: 'html', html: h });
  };
  for (const m of html.matchAll(re)) {
    pridejHtml(html.slice(posledni, m.index));
    posledni = m.index! + m[0].length;
    const klic = MAPA.find(([r]) => r.test(m[1]))?.[1];
    if (!klic) continue;
    if (PREVOD[klic]) prevod = PREVOD[klic]!;
    else casti.push({ typ: 'komponenta', klic });
  }
  pridejHtml(html.slice(posledni));
  return casti;
}

const bezTagu = (s: string) => s.replace(/<[^>]+>/g, '').trim();

// Sekce ### až do dalšího ## → záložky (přepínač [data-switch] v Base.astro)
export function naZalozky(html: string, id: string): string {
  const konec = html.search(/<h2[\s>]/);
  const blok = konec === -1 ? html : html.slice(0, konec);
  const zbytek = konec === -1 ? '' : html.slice(konec);
  const kusy = blok.split(/(?=<h3[\s>])/);
  const uvod = /^\s*<h3/.test(kusy[0]) ? '' : kusy.shift()!;
  const panely = kusy.map((k, i) => {
    const m = k.match(/^\s*<h3[^>]*>([\s\S]*?)<\/h3>/);
    return { nazev: m ? bezTagu(m[1]) : `${i + 1}`, obsah: m ? k.slice(m.index! + m[0].length) : k };
  });
  if (!panely.length) return html;
  const tlacitka = panely.map((p, i) =>
    `<button type="button" role="tab" id="${id}-tab-${i}" aria-controls="${id}-p-${i}" aria-selected="${i === 0}" data-target="p${i}">${p.nazev}</button>`).join('');
  const obsah = panely.map((p, i) =>
    `<div data-group-view="p${i}" role="tabpanel" id="${id}-p-${i}" aria-labelledby="${id}-tab-${i}"${i ? ' hidden' : ''}>${p.obsah}</div>`).join('');
  return `${uvod}<div class="zalozky"><div class="seg" role="tablist" aria-label="Chatbot" data-switch="${id}">${tlacitka}</div><div id="${id}" class="zalozky-panely">${obsah}</div></div>${zbytek}`;
}

// Náhledové obrázky metodik podle adresy odkazu (public/img)
const NAHLEDY: [string, string][] = [
  ['chatboti-ve-vyuce-pracovni-listy', '/img/metodika-chatboti-ve-vyuce.jpg'],
  ['rozvoj-mysleni', '/img/metodika-rozvoj-mysleni.jpg'],
  ['formativnim-hodnoceni', '/img/metodika-formativni-hodnoceni.jpg'],
];
const IKONA_DOC = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path d="M14 3v6h6M8 13h8M8 17h5"></path></svg>';

// První seznam odkazů → karty s náhledem
export function naNahledy(html: string): string {
  const m = html.match(/^\s*<ul>([\s\S]*?)<\/ul>/);
  if (!m) return html;
  const karty = [...m[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map(([, li]) => {
    const a = li.match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
    if (!a) return `<article class="card nahled"><p>${li}</p></article>`;
    const popis = li.replace(/^\s*<strong>[\s\S]*?<\/strong>\s*[—–-]?\s*/, '');
    const obr = NAHLEDY.find(([k]) => a[1].includes(k))?.[1];
    const nahled = obr ? `<img src="${url(obr)}" alt="" loading="lazy" />` : `<div class="nahled-tile" aria-hidden="true">${IKONA_DOC}</div>`;
    return `<article class="card nahled">${nahled}<h3><a href="${a[1]}">${a[2]}</a></h3><p>${popis}</p></article>`;
  });
  return `<div class="nahledy">${karty.join('')}</div>` + html.slice(m.index! + m[0].length);
}

// První tabulka → na mobilu karty (data-label s názvem sloupce u každé buňky)
export function naTabulkuKaret(html: string): string {
  const m = html.match(/<table>([\s\S]*?)<\/table>/);
  if (!m) return html;
  const hlavicky = [...(m[1].match(/<thead>([\s\S]*?)<\/thead>/)?.[1] ?? '').matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((x) => bezTagu(x[1]).replace(/"/g, '&quot;'));
  const tabulka = m[0].replace(/<tbody>([\s\S]*?)<\/tbody>/, (tb) =>
    tb.replace(/<tr>([\s\S]*?)<\/tr>/g, (_, radek: string) => {
      let i = 0;
      return '<tr>' + radek.replace(/<td([^>]*)>/g, (_t: string, attrs: string) => `<td${attrs} data-label="${hlavicky[i++] ?? ''}">`) + '</tr>';
    }));
  return html.slice(0, m.index) + `<div class="tabulka-karty">${tabulka}</div>` + html.slice(m.index! + m[0].length);
}

// Rozdělení HTML na úvod a oddíly podle <h2> (pro celostránkové šablony)
export type Oddil = { nadpis: string; id: string; casti: Cast[] };
export function naOddily(casti: Cast[]): { uvod: Cast[]; oddily: Oddil[] } {
  const uvod: Cast[] = [];
  const oddily: Oddil[] = [];
  for (const c of casti) {
    if (c.typ !== 'html') { (oddily.at(-1)?.casti ?? uvod).push(c); continue; }
    const kusy = c.html.split(/(?=<h2[\s>])/);
    for (const k of kusy) {
      const h = k.match(/^\s*<h2([^>]*)>([\s\S]*?)<\/h2>/);
      if (h) {
        const id = h[1].match(/id="([^"]+)"/)?.[1] ?? '';
        const zbytek = k.slice(h.index! + h[0].length);
        oddily.push({ nadpis: bezTagu(h[2]), id, casti: zbytek.trim() ? [{ typ: 'html', html: zbytek }] : [] });
      } else if (k.trim()) {
        (oddily.at(-1)?.casti ?? uvod).push({ typ: 'html', html: k });
      }
    }
  }
  return { uvod, oddily };
}

// Odstavce „**Nadpis.** text“ → [{nadpis, text}]
export function teze(html: string): { nadpis: string; text: string }[] {
  return [...html.matchAll(/<p><strong>([\s\S]*?)<\/strong>\s*([\s\S]*?)<\/p>/g)].map(([, n, t]) => ({ nadpis: n.replace(/\.\s*$/, ''), text: t }));
}

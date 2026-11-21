// Komponenty v Markdownu: komentář <!-- komponenta: … --> v content/stranky/*.md označuje místo,
// kam šablona vloží datovou komponentu, nebo jak má upravit HTML, které po komentáři následuje.
import { url } from './url';

export type Klic =
  | 'cenik' | 'sady-skills' | 'pluginy' | 'tiny' | 'infografika-mcp' | 'infografika-konektor' | 'instrukce' // datové komponenty (Astro)
  | 'zalozky' | 'nahledy' | 'tabulka-karty' | 'tlacitko' | 'karta-obrazek' | 'karty-zpusobu' | 'video' // úprava následujícího HTML
  | 'teze' | 'casova-osa' | 'matice' | 'karty-nastroju' | 'zdroje-nastroju'; // stránka Změny funkcí

const MAPA: [RegExp, Klic][] = [
  [/karty tarifů/, 'cenik'],
  [/infografika MCP/, 'infografika-mcp'],
  [/infografika konektoru/, 'infografika-konektor'],
  [/animace instrukcí/, 'instrukce'],
  [/dlaždice sad a skills/, 'sady-skills'],
  [/karty sad/, 'pluginy'],
  [/tabulka žákovský prompt/, 'tiny'],
  [/záložky podle nástroje/, 'zalozky'],
  [/^\s*tlačítko\b/, 'tlacitko'],
  [/karta s obrázkem/, 'karta-obrazek'],
  [/karty způsobů/, 'karty-zpusobu'],
  [/^\s*video\b/, 'video'],
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
  tlacitko: naTlacitko,
  'karta-obrazek': naKartuSObrazkem,
  'karty-zpusobu': naKartyZpusobu,
  video: naVideo,
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

// Následující odstavec s odkazem na video (Loom, YouTube) → vložené video na šířku textu (<!-- komponenta: video -->)
// V Markdownu: [Název videa](https://www.loom.com/share/…) — text odkazu je titulek přehrávače pro čtečky.
export function embedVidea(href: string): string | null {
  const loom = href.match(/loom\.com\/(?:share|embed)\/([0-9a-f]+)/i);
  if (loom) return `https://www.loom.com/embed/${loom[1]}`;
  const yt = href.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  return null;
}
export function naVideo(html: string): string {
  const m = html.match(/<p>\s*<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/p>/);
  const src = m && embedVidea(m[1]);
  if (!m || !src) return html;
  const nazev = bezTagu(m[2]).replace(/"/g, '&quot;');
  const video = `<div class="video"><iframe src="${src}" title="${nazev}" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  return html.slice(0, m.index) + video + html.slice(m.index! + m[0].length);
}

// Následující odstavec s odkazem → tlačítko (<!-- komponenta: tlačítko -->)
export function naTlacitko(html: string): string {
  return html.replace(/<p>\s*<a /, '<p class="tlacitko-odstavec"><a class="btn btn--primary" ');
}

const bezTagu = (s: string) => s.replace(/<[^>]+>/g, '').trim();

// Sekce ### až do dalšího ## → záložky (přepínač [data-switch] v Base.astro)
export function naZalozky(html: string, id: string): string {
  // karta končí před dalším nadpisem (h2 nebo druhým h3)
  const prvniH3 = html.search(/<h3[\s>]/);
  const dalsi = html.slice(prvniH3 + 3).search(/<h[23][\s>]/);
  const konec = prvniH3 === -1 || dalsi === -1 ? html.search(/<h2[\s>]/) : prvniH3 + 3 + dalsi;
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

// První seznam odkazů → karty s náhledem jako na hlavní stránce (celá karta je odkaz)
export function naNahledy(html: string): string {
  const m = html.match(/^\s*<ul>([\s\S]*?)<\/ul>/);
  if (!m) return html;
  const karty = [...m[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map(([, li]) => {
    const a = li.match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
    if (!a) return '';
    const popis = bezTagu(li.replace(/^\s*<strong>[\s\S]*?<\/strong>\s*[—–-]?\s*/, ''));
    const obr = NAHLEDY.find(([k]) => a[1].includes(k))?.[1];
    const nahled = obr ? `<img src="${url(obr)}" alt="" loading="lazy" />` : `<span class="nahled-tile" aria-hidden="true">${IKONA_DOC}</span>`;
    return `<a class="thumb" href="${a[1]}">${nahled}<span class="thumb-text"><span class="thumb-nazev">${bezTagu(a[2])}</span><span class="thumb-popis">${popis}</span></span></a>`;
  });
  return `<div class="nahledy">${karty.join('')}</div>` + html.slice(m.index! + m[0].length);
}

// Obrázek, nadpis ###, text a odkaz (do dalšího nadpisu) → karta s obrázkem vlevo; odkaz jako tlačítko
export function naKartuSObrazkem(html: string): string {
  // karta končí před dalším nadpisem (h2 nebo druhým h3)
  const prvniH3 = html.search(/<h3[\s>]/);
  const dalsi = html.slice(prvniH3 + 3).search(/<h[23][\s>]/);
  const konec = prvniH3 === -1 || dalsi === -1 ? html.search(/<h2[\s>]/) : prvniH3 + 3 + dalsi;
  const blok = konec === -1 ? html : html.slice(0, konec), zbytek = konec === -1 ? '' : html.slice(konec);
  const img = blok.match(/<p>\s*(<img [^>]*>)\s*<\/p>/);
  const text = (img ? blok.replace(img[0], '') : blok).replace(/<p>\s*<a /, '<p class="tlacitko-odstavec"><a class="btn btn--primary" ');
  if (!img) return `<div class="karta-obrazek karta-bez-obrazku card"><div class="karta-obrazek-text">${text}</div></div>` + zbytek;
  return `<div class="karta-obrazek card">${img[1]}<div class="karta-obrazek-text">${text}</div></div>` + zbytek;
}

// Sekce ### až do dalšího ## → karty ve dvou sloupcích (stránka Způsoby využití AI ve výuce, varianta A z Claude Design):
// nadpis a tučný perex; „Co dělá žák“ a „Co dělá AI“ vedle sebe;
// Hodí se / Nehodí se a ostatní položky jako řádky „Štítek: text“ (pojistka se nezobrazuje); v patičce Tiny a prompty jako tlačítka.
const KRATCE: Record<string, string> = { 'Jak poznáte, že se žák učí': 'Důkaz o učení', 'Otázka k reflexi': 'Reflexe' };

export function naKartyZpusobu(html: string): string {
  const konec = html.search(/<h2[\s>]/);
  const blok = konec === -1 ? html : html.slice(0, konec), zbytek = konec === -1 ? '' : html.slice(konec);
  const kusy = blok.split(/(?=<h3[\s>])/);
  const uvod = /^\s*<h3/.test(kusy[0]) ? '' : kusy.shift()!;
  if (!kusy.length) return html;
  const karty = kusy.map((k) => {
    const h = k.match(/^\s*<h3([^>]*)>([\s\S]*?)<\/h3>/);
    const perex = k.match(/<p>\s*<strong>([\s\S]*?)<\/strong>\s*<\/p>/)?.[1] ?? '';
    const polozky = new Map([...(k.match(/<ul>([\s\S]*?)<\/ul>/)?.[1] ?? '').matchAll(/<li>\s*<strong>([\s\S]*?)<\/strong>\s*([\s\S]*?)<\/li>/g)]
      .map(([, s, x]) => [bezTagu(s).replace(/:\s*$/, ''), x.trim()] as [string, string]));
    const vezmi = (stitek: string) => { const v = polozky.get(stitek); polozky.delete(stitek); return v; };
    const zak = vezmi('Co dělá žák'), ai = vezmi('Co dělá AI');
    const hodi = vezmi('Hodí se, když'), nehodi = vezmi('Nehodí se, když');
    vezmi('Pojistka');
    const spustit = vezmi('Kde to spustit');
    let out = `<article class="zpusob"><div class="zpusob-hlava"><h3${h?.[1] ?? ''}>${h?.[2] ?? ''}</h3>`
      + (perex ? `<p class="zpusob-perex">${perex}</p>` : '') + '</div>';
    if (zak || ai) out += '<div class="zpusob-role">'
      + (zak ? `<div><span class="zpusob-role-kdo">Žák</span><p>${zak}</p></div>` : '')
      + (ai ? `<div><span class="zpusob-role-kdo">AI</span><p>${ai}</p></div>` : '') + '</div>';
    const vel = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
    const radky: [string, string][] = [...(hodi ? [['Hodí se, když', vel(hodi)]] : []), ...(nehodi ? [['Nehodí se, když', vel(nehodi)]] : []), ...polozky] as [string, string][];
    if (radky.length) out += '<div class="zpusob-dalsi">'
      + radky.map(([s, x]) => `<p><strong>${KRATCE[s] ?? s}:</strong> ${x}</p>`).join('') + '</div>';
    if (spustit) {
      const odkazy = [...spustit.matchAll(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
      const tiny = spustit.split(/,?\s*v běžném chatbotu/i)[0].trim().match(/^V Tiny\s+([\s\S]*)$/i);
      const tlacitka = odkazy.map(([, href, nazev]) => `<a class="btn btn--outline btn--sm" href="${href}">Prompt ${bezTagu(nazev)} →</a>`).join('');
      out += '<div class="zpusob-paticka">'
        + (tiny ? `<p class="zpusob-tiny"><strong>V Tiny:</strong> ${bezTagu(tiny[1]).replace(/[.,]\s*$/, '')}</p>` : '')
        + tlacitka + '</div>';
    }
    return out + '</article>';
  });
  return `${uvod}<div class="zpusoby">${karty.join('')}</div>${zbytek}`;
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

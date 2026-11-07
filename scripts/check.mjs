// Kontrola obsahu webu: frontmatter stránek, skills podle docs/specifikace-skills.md,
// databáze promptů, sady, interní odkazy a přesměrování.
//
// Spuštění: npm run check   (nebo node scripts/check.mjs)
// Vypíše chyby (E) a varování (W). Návratový kód 1, pokud je aspoň jedna chyba.
import fs from 'node:fs';
import path from 'node:path';
import { load as nactiYamlText } from 'js-yaml';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
process.chdir(ROOT);

let chyby = 0;
let varovani = 0;
const E = (kde, zprava) => { chyby++; console.log(`E ${kde}: ${zprava}`); };
const W = (kde, zprava) => { varovani++; console.log(`W ${kde}: ${zprava}`); };

const cti = (p) => fs.readFileSync(p, 'utf8');
const nactiYaml = (p) => nactiYamlText(cti(p));
const soubory = (dir, filtr = () => true) =>
  fs.readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((d) => d.isFile() && filtr(d.name))
    .map((d) => path.join(d.parentPath, d.name));

function frontmatter(text, kde) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return [null, text];
  try {
    return [nactiYamlText(m[1]) ?? {}, m[2]];
  } catch (e) {
    E(kde, `frontmatter není platný YAML: ${e.message.split('\n')[0]}`);
    return [null, m[2]];
  }
}

const STAVY = ['koncept', 'ke-kontrole', 'hotovo'];
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const jeDatum = (v) => v instanceof Date || /^\d{4}-\d{2}-\d{2}$/.test(String(v));

// ---------------------------------------------------------------- data
const navigace = nactiYaml('content/navigace.yaml');
const sady = nactiYaml('content/sady.yaml');
const znalosti = nactiYaml('content/znalosti/znalosti.yaml') ?? {};
const sadySlugy = new Set(sady.map((s) => s.slug));
const skillSlugy = fs.readdirSync('content/skills', { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();

/** Všechny URL, které web vygeneruje (stránky + generované z dat). */
const routy = new Set();
/** Kotvy na /funkce/prompty (#kategorie_slug). */
const kotvyPromptu = new Set();
/** Odkazy z Markdownu ke kontrole až po sestavení seznamu rout: [kde, href] */
const odkazy = [];
const sbirejOdkazy = (kde, text) => {
  for (const m of text.matchAll(/\]\((\/[^)\s]*)\)/g)) odkazy.push([kde, m[1]]);
  for (const m of text.matchAll(/href="(\/[^"]*)"/g)) odkazy.push([kde, m[1]]);
};

// ---------------------------------------------------------------- stránky
const menuSekce = new Map(navigace.menu.map((s) => [s.title, s]));
const menuUrl = new Set(navigace.menu.flatMap((s) => s.items.map((i) => i.href)));
for (const soubor of soubory('content/stranky', (n) => n.endsWith('.md'))) {
  const kde = soubor;
  const id = path.relative('content/stranky', soubor).replace(/\.md$/, '').split(path.sep).join('/');
  const url = id === 'index' ? '/' : `/${id}`;
  routy.add(url);
  const [fm, body] = frontmatter(cti(soubor), kde);
  if (!fm) { E(kde, 'chybí frontmatter'); continue; }
  for (const k of ['title', 'popis', 'aktualizovano', 'stav']) if (fm[k] == null) E(kde, `chybí ${k}`);
  if (fm.stav && !STAVY.includes(fm.stav)) E(kde, `neznámý stav „${fm.stav}“ (${STAVY.join(' | ')})`);
  if (fm.aktualizovano && !jeDatum(fm.aktualizovano)) E(kde, `aktualizovano „${fm.aktualizovano}“ není datum RRRR-MM-DD`);
  if (fm.popis && fm.popis.length > 160) W(kde, `popis (meta description) má ${fm.popis.length} znaků, vyhledávače zobrazí cca 155`);
  if (id !== 'index') {
    if (!fm.menu) E(kde, 'chybí menu');
    else if (!menuSekce.has(fm.menu)) E(kde, `menu „${fm.menu}“ není v content/navigace.yaml`);
    if (fm.poradi == null) W(kde, 'chybí poradi');
    if (!menuUrl.has(url)) W(kde, `stránka ${url} není v content/navigace.yaml`);
  }
  if (fm.data && !fs.existsSync(fm.data)) E(kde, `data: soubor ${fm.data} neexistuje`);
  for (const z of fm.zdroje ?? []) {
    const u = typeof z === 'string' ? z : z?.url;
    if (!u) E(kde, 'zdroj bez URL');
    else if (!/^https?:\/\//.test(u) && !fs.existsSync(u)) E(kde, `zdroj „${u}“ není URL ani existující soubor`);
  }
  if (/^\s*#\s/m.test(body) === false) W(kde, 'chybí nadpis H1 (# …)');
  sbirejOdkazy(kde, body);
}

// ---------------------------------------------------------------- skills
const vSadach = new Set(sady.flatMap((s) => s.skills ?? []));
for (const slug of skillSlugy) {
  const d = path.join('content/skills', slug);
  const kde = `skill ${slug}`;
  routy.add(`/skills/${slug}`);
  if (!SLUG.test(slug) || slug.length > 64) E(kde, 'název složky neodpovídá pravidlům (a-z0-9-, max 64 znaků)');
  if (/claude|anthropic/.test(slug)) E(kde, 'název nesmí obsahovat claude/anthropic');
  for (const req of ['SKILL.md', 'prompt.md', 'meta.yaml']) if (!fs.existsSync(path.join(d, req))) E(kde, `chybí ${req}`);

  if (fs.existsSync(path.join(d, 'SKILL.md'))) {
    const [fm, body] = frontmatter(cti(path.join(d, 'SKILL.md')), kde);
    if (!fm) E(kde, 'SKILL.md nemá frontmatter');
    else {
      const klice = Object.keys(fm).sort();
      if (klice.join() !== 'description,name') E(kde, `frontmatter SKILL.md má mít jen name a description, má: ${klice.join(', ')}`);
      if (fm.name !== slug) E(kde, `name „${fm.name}“ ≠ název složky`);
      const desc = fm.description ?? '';
      if (desc.length < 1 || desc.length > 1024) E(kde, `description má ${desc.length} znaků (1–1024)`);
      if (/[<>]/.test(desc)) E(kde, 'description obsahuje < nebo >');
    }
    const radku = body.split('\n').length;
    if (radku > 500) E(kde, `SKILL.md má ${radku} řádků (max 500)`);
    else if (radku > 300) W(kde, `SKILL.md má ${radku} řádků (doporučeno do 300)`);
    for (const ref of new Set(body.match(/references\/[\w\-.]+\.md/g) ?? [])) {
      if (!fs.existsSync(path.join(d, ref))) E(kde, `odkaz na neexistující ${ref}`);
    }
    const refDir = path.join(d, 'references');
    if (fs.existsSync(refDir)) {
      for (const f of fs.readdirSync(refDir).filter((n) => n.endsWith('.md'))) {
        if (!body.includes(`references/${f}`)) W(kde, `references/${f} není ze SKILL.md odkázaný`);
      }
    }
    if (/\bmlad(ý|ého|ému|ým) jedin/i.test(body)) E(kde, 'obsahuje „mladý jedinec“ — nahradit „žák“');
    if (/jméno žáka/i.test(body) && !/(nežádej|nikdy|nepoužívej|nevkládejte|iniciál)/i.test(body)) {
      W(kde, 'zmínka o jménu žáka — zkontrolovat ochranu údajů');
    }
  }

  if (fs.existsSync(path.join(d, 'prompt.md'))) {
    const [fm, body] = frontmatter(cti(path.join(d, 'prompt.md')), `${kde} prompt.md`);
    if (!fm?.title) E(kde, 'prompt.md: chybí title');
    const bloky = [...body.matchAll(/```text\r?\n([\s\S]*?)```/g)].map((m) => m[1]);
    if (!bloky.length) E(kde, 'prompt.md neobsahuje žádný blok ```text');
    if (bloky.length > 4) W(kde, `prompt.md má ${bloky.length} promptů (doporučeno max 1 + 3 varianty)`);
    bloky.forEach((b, i) => { if (b.length > 2500) E(kde, `prompt č. ${i + 1} má ${b.length} znaků (max 2500)`); });
    sbirejOdkazy(`${kde} prompt.md`, body);
  }

  if (fs.existsSync(path.join(d, 'meta.yaml'))) {
    let meta = {};
    try { meta = nactiYaml(path.join(d, 'meta.yaml')) ?? {}; } catch (e) { E(kde, `meta.yaml není platný YAML: ${e.message.split('\n')[0]}`); }
    for (const k of ['title', 'slug', 'kratky_popis', 'pro_koho', 'sady', 'puvodni_obsah', 'autori', 'stav', 'aktualizovano']) {
      if (meta[k] == null) E(kde, `meta.yaml: chybí ${k}`);
    }
    if (meta.slug !== slug) E(kde, 'meta.yaml: slug ≠ název složky');
    if ((meta.kratky_popis ?? '').length > 140) W(kde, `meta.yaml: kratky_popis má ${meta.kratky_popis.length} znaků (max 140)`);
    if (meta.stav && !STAVY.includes(meta.stav)) E(kde, `meta.yaml: neznámý stav „${meta.stav}“`);
    for (const p of meta.pro_koho ?? []) if (!['ucitele', 'vedeni', 'zaci-18plus'].includes(p)) E(kde, `meta.yaml: neznámé pro_koho „${p}“`);
    for (const s of meta.sady ?? []) {
      if (!sadySlugy.has(s)) E(kde, `meta.yaml: neznámá sada ${s}`);
      else if (!sady.find((x) => x.slug === s).skills.includes(slug)) E(kde, `meta.yaml uvádí sadu ${s}, ale content/sady.yaml skill v té sadě nemá`);
    }
    for (const z of meta.znalosti ?? []) {
      if (!znalosti[z]) E(kde, `znalostní soubor ${z} není v content/znalosti/znalosti.yaml`);
      else if (znalosti[z].verejne === false) W(kde, `znalostní soubor ${z} je neveřejný — web ho nezobrazí`);
    }
    if (!meta.google_doc) W(kde, 'meta.yaml: chybí google_doc (Google Doc se systémovým promptem)');
    if (meta.aktualizovano && !jeDatum(meta.aktualizovano)) E(kde, 'meta.yaml: aktualizovano není datum RRRR-MM-DD');
  }
  if (!vSadach.has(slug)) W(kde, 'skill není v žádné sadě v content/sady.yaml');
}

// ---------------------------------------------------------------- sady
for (const s of sady) {
  const kde = `sady.yaml ${s.slug}`;
  routy.add(`/sady/${s.slug}`);
  if (!SLUG.test(s.slug ?? '')) E(kde, 'slug neodpovídá pravidlům (a-z0-9-)');
  for (const k of ['title', 'popis', 'skills']) if (!s[k]) E(kde, `chybí ${k}`);
  for (const sk of s.skills ?? []) if (!skillSlugy.includes(sk)) E(kde, `skill ${sk} neexistuje`);
}
routy.add('/skills');

// ---------------------------------------------------------------- prompty
for (const skupina of ['pedagogove', 'archiv-2024']) {
  for (const soubor of soubory(`content/prompty/${skupina}`, (n) => n.endsWith('.md'))) {
    const kde = soubor;
    const nazev = path.basename(soubor, '.md');
    routy.add(`/funkce/prompty/${nazev}`);
    const [fm, body] = frontmatter(cti(soubor), kde);
    if (!fm) { E(kde, 'chybí frontmatter'); continue; }
    for (const k of ['title', 'slug', 'skupina', 'kategorie', 'kategorie_slug', 'stav']) if (fm[k] == null) E(kde, `chybí ${k}`);
    if (fm.slug !== nazev) E(kde, `slug „${fm.slug}“ ≠ název souboru`);
    if (fm.skupina !== skupina) E(kde, `skupina „${fm.skupina}“ ≠ složka ${skupina}`);
    if (fm.skill && !skillSlugy.includes(fm.skill)) E(kde, `skill „${fm.skill}“ neexistuje`);
    for (const k of fm.kategorie_slug ?? []) kotvyPromptu.add(k);
    if ((fm.kategorie ?? []).length !== (fm.kategorie_slug ?? []).length) W(kde, 'kategorie a kategorie_slug mají různý počet položek');
    if (!/```text\r?\n/.test(body)) W(kde, 'neobsahuje blok ```text (web nenabídne tlačítko Kopírovat)');
    sbirejOdkazy(kde, body);
  }
}
routy.add('/funkce/prompty/zaci');
for (const soubor of soubory('content/prompty/zaci', (n) => n.endsWith('.md'))) {
  const kde = soubor;
  const nazev = path.basename(soubor, '.md');
  const [fm, body] = frontmatter(cti(soubor), kde);
  if (!fm) { E(kde, 'chybí frontmatter'); continue; }
  if (!fm.title) E(kde, 'chybí title');
  if (fm.pro_koho !== 'zaci') E(kde, 'pro_koho má být zaci');
  if (nazev !== '_index') {
    routy.add(`/funkce/prompty/zaci/${nazev}`);
    if (fm.slug !== nazev) E(kde, `slug „${fm.slug}“ ≠ název souboru`);
    if (!/```text\r?\n/.test(body)) W(kde, 'neobsahuje blok ```text');
  }
  if (fm.stav && !STAVY.includes(fm.stav)) E(kde, `neznámý stav „${fm.stav}“`);
  sbirejOdkazy(kde, body);
}

// ---------------------------------------------------------------- odkazy a přesměrování
const uploads = 'archiv/uploads';
function overUrl(kde, href, co = 'odkaz') {
  const [cesta, kotva] = href.split('#');
  const p = decodeURI(cesta.replace(/\/$/, '') || '/');
  if (p.startsWith('/archiv/uploads/')) {
    if (!fs.existsSync(path.join(uploads, p.slice('/archiv/uploads/'.length)))) E(kde, `${co} ${href}: soubor v ${uploads} neexistuje`);
    return;
  }
  if (p.startsWith('/download/')) return; // ZIPy skills a pluginů vznikají při buildu (fáze 3)
  if (!routy.has(p)) { E(kde, `${co} ${href} vede na neexistující stránku`); return; }
  if (kotva && p === '/funkce/prompty' && !kotvyPromptu.has(kotva)) W(kde, `${co} ${href}: kategorie „${kotva}“ v databázi promptů není`);
}

for (const s of navigace.menu) for (const i of s.items) overUrl('navigace.yaml', i.href, 'položka menu');
overUrl('navigace.yaml', navigace.cta.href, 'tlačítko');
for (const [kde, href] of odkazy) overUrl(kde, href);

const { redirects } = JSON.parse(cti('migrace/redirects.json'));
const zdroje = new Set();
for (const r of redirects) {
  const kde = `redirects.json ${r.source}`;
  if (zdroje.has(r.source)) E(kde, 'duplicitní source');
  zdroje.add(r.source);
  if (routy.has(r.source)) E(kde, 'přesměrování by zakrylo existující stránku');
  if (r.source.includes(':path*')) continue;
  overUrl(kde, r.destination, 'cíl');
}

// vercel.json musí odpovídat redirects.json
const { spawnSync } = await import('node:child_process');
const v = spawnSync(process.execPath, ['scripts/build-vercel-json.mjs', '--kontrola'], { encoding: 'utf8' });
if (v.status !== 0) E('vercel.json', v.stderr.trim());

console.log(`\nStránek a generovaných URL: ${routy.size}, přesměrování: ${redirects.length}`);
console.log(`${chyby} chyb, ${varovani} varování`);
process.exit(chyby ? 1 : 0);

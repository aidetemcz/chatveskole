// Načítání dat z content/ a data/ při buildu (YAML a Markdown v repozitáři).
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const ROOT = process.cwd();
const readYaml = (rel: string) => YAML.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));

export type MenuItem = { title: string; href: string; zvyraznit?: boolean };
export type MenuGroup = { title: string; items: MenuItem[] };
export const navigace: { menu: MenuGroup[]; cta: MenuItem } = readYaml('content/navigace.yaml');

export type Sada = { slug: string; title: string; popis: string; pro_koho: string[]; skills: string[] };
export const sady: Sada[] = readYaml('content/sady.yaml');

export type Znalost = { nazev: string; url: string; verejne?: boolean };
export const znalosti: Record<string, Znalost> = readYaml('content/znalosti/znalosti.yaml');

export const PRO_KOHO: Record<string, string> = {
  ucitele: 'Učitelé',
  vedeni: 'Vedení školy',
  'zaci-18plus': 'Studenti od 18 let',
};
export const PRO_KOHO_SKUPINA: Record<string, string> = {
  ucitele: 'Pro učitele',
  vedeni: 'Pro vedení školy',
  'zaci-18plus': 'Pro studenty od 18 let',
};

// --- prompt.md skillu: varianty promptu -------------------------------------------
export type Varianta = { nazev: string; text: string };
export type SkillPrompt = { varianty: Varianta[]; tip: string };

export function parsePromptMd(raw: string): SkillPrompt {
  const body = raw.replace(/^---[\s\S]*?\n---\n/, '');
  const varianty: Varianta[] = [];
  let tip = '';
  const parts = body.split(/^## /m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const heading = part.slice(0, nl).trim();
    const rest = part.slice(nl + 1);
    const m = rest.match(/```text\n([\s\S]*?)```/);
    if (m) varianty.push({ nazev: heading.replace(/^Varianta:\s*/, ''), text: m[1].trimEnd() });
    const t = rest.match(/\*\*Tip:\*\*\s*([\s\S]*?)(\n\n|$)/);
    if (t) tip = t[1].trim();
  }
  if (!tip) {
    const t = body.match(/\*\*Tip:\*\*\s*([\s\S]*?)(\n\n|$)/);
    if (t) tip = t[1].trim();
  }
  return { varianty, tip };
}

// --- skills ------------------------------------------------------------------------
export type Metodika = { nazev: string; url?: string };
export type Skill = {
  slug: string;
  title: string;
  kratky_popis: string;
  pro_koho: string[];
  sady: string[];
  stitky?: string[];
  rezimy?: string[];
  autori?: string[];
  metodika?: Metodika[];
  znalosti?: string[];
  google_doc?: string;
  google_slozka?: string;
  puvodni_asistenti?: { gpt?: string | string[]; gem?: string | string[]; systemovy_prompt?: string | string[] };
  stav?: string;
  aktualizovano?: string;
  prompt: SkillPrompt;
};

const SKILLS_DIR = path.join(ROOT, 'content/skills');
export const skills: Skill[] = fs
  .readdirSync(SKILLS_DIR)
  .filter((d) => fs.existsSync(path.join(SKILLS_DIR, d, 'meta.yaml')))
  .map((slug) => {
    const meta = readYaml(`content/skills/${slug}/meta.yaml`);
    const prompt = parsePromptMd(fs.readFileSync(path.join(SKILLS_DIR, slug, 'prompt.md'), 'utf8'));
    return { ...meta, slug, prompt } as Skill;
  });

export const skillBySlug = (slug: string) => skills.find((s) => s.slug === slug);
export const sadaBySlug = (slug: string) => sady.find((s) => s.slug === slug);
export const asList = (v?: string | string[]) => (v ? (Array.isArray(v) ? v : [v]) : []);

// pořadí skills podle sad (jak jsou v sady.yaml)
export const skillsVPoradi: Skill[] = (() => {
  const seen = new Set<string>();
  const out: Skill[] = [];
  for (const s of sady) for (const slug of s.skills) {
    const k = skillBySlug(slug);
    if (k && !seen.has(slug)) { seen.add(slug); out.push(k); }
  }
  for (const k of skills) if (!seen.has(k.slug)) out.push(k);
  return out;
})();

// --- prompty: skupiny a kategorie ----------------------------------------------------
export const SKUPINY_PROMPTU: { id: string; title: string }[] = [
  { id: 'pedagogove', title: 'Pro učitele' },
  { id: 'vedeni', title: 'Pro vedení školy' },
  { id: 'zaci', title: 'Pro žáky' },
];
export const KATEGORIE_ZACI = 'Práce žáků s chatbotem';
// pořadí účelů v katalogu promptů
export const PORADI_KATEGORII = [
  'Formativní hodnocení',
  'Slovní hodnocení',
  'Tvorba materiálů do výuky',
  'Aktualizace materiálů',
  'Komunikace s rodiči',
  'Tvorba strategických dokumentů',
  KATEGORIE_ZACI,
];

export function promptText(body: string): string {
  const m = body.match(/```text\n([\s\S]*?)```/);
  return m ? m[1].trimEnd() : '';
}

export function pocet(n: number, jedna: string, dve: string, pet: string) {
  return `${n} ${n === 1 ? jedna : n >= 2 && n <= 4 ? dve : pet}`;
}

export const ZIP = {
  skill: (slug: string) => `/download/skills/${slug}.zip`,
  copilot: (slug: string) => `/download/skills/${slug}-copilot.zip`,
  plugin: (sada: string) => `/download/pluginy/aidetem-${sada}.zip`,
};

export function slugify(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Zdroje ve frontmatteru, které odkazují na data v repozitáři → stránka webu, kde se data zobrazují
export const INTERNI_ZDROJE: Record<string, { title: string; href: string }> = {
  'data/funkce-chatbotu.yaml': { title: 'Přehled funkcí chatbotů na tomto webu', href: '/funkce/zmeny-2026' },
  'data/ceny.yaml': { title: 'Přehled cen chatbotů na tomto webu', href: '/zaciname/kolik-stoji-chatboti' },
};

// --- data pro tabulky ----------------------------------------------------------------
export type StavFunkce = 'ano' | 'omezene' | 'ne';
export type BunkaMatice = { dnes: StavFunkce; '2027': StavFunkce; zmena: 'up' | 'down' | 'same'; stitek: string | null; nazev: string; poznamka: string };
export type FunkceChatbotu = {
  stav_k: string;
  zdroj: string;
  poznamka: string;
  nastroje: { id: string; nazev: string; vyrobce: string; posun: string; konci: string[]; pribyva: string[]; skola: string[] }[];
  casova_osa: { datum: string; nastroj: string; text: string; klicove?: boolean }[];
  stavy: Record<StavFunkce, string>;
  matice: { funkce: string; popis: string; nastroje: Record<string, BunkaMatice> }[];
  zdroje: Record<string, string[]>;
};
export const funkceChatbotu: FunkceChatbotu = readYaml('data/funkce-chatbotu.yaml');

export type Ceny = {
  aktualizovano: string;
  zahranicni_platby?: string;
  nastroje: { id: string; nazev: string; vyrobce: string; cenik: string; tarify: { nazev: string; cena: string; pozn?: string }[]; trenink?: string; zdroje?: string[] }[];
};
export const ceny: Ceny = readYaml('data/ceny.yaml');

// datum 2026-11-17 → "17. 11. 2026" (nezlomitelné mezery)
export function datumCesky(iso: string | Date): string {
  const d = typeof iso === 'string' ? new Date(iso + 'T12:00:00') : iso;
  return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`;
}

// Kontrola dat: položky seznamů musí být text (dvojtečka v YAML bez uvozovek vytvoří slovník)
(() => {
  const chyby: string[] = [];
  const text = (v: unknown, kde: string) => { if (typeof v !== 'string') chyby.push(`${kde}: ${JSON.stringify(v)}`); };
  for (const n of funkceChatbotu.nastroje) for (const k of ['konci', 'pribyva', 'skola'] as const) n[k].forEach((x, i) => text(x, `funkce-chatbotu.yaml ${n.id}.${k}[${i}]`));
  for (const r of funkceChatbotu.matice) for (const [id, c] of Object.entries(r.nastroje)) { text(c.nazev, `funkce-chatbotu.yaml ${r.funkce}/${id}.nazev`); text(c.poznamka, `funkce-chatbotu.yaml ${r.funkce}/${id}.poznamka`); }
  for (const u of funkceChatbotu.casova_osa) text(u.text, `funkce-chatbotu.yaml casova_osa ${u.datum}`);
  for (const n of ceny.nastroje) n.tarify.forEach((t) => { text(t.cena, `ceny.yaml ${n.id}/${t.nazev}.cena`); if (t.pozn) text(t.pozn, `ceny.yaml ${n.id}/${t.nazev}.pozn`); });
  if (chyby.length) throw new Error('Chybná data (dejte text do uvozovek):\n' + chyby.join('\n'));
})();

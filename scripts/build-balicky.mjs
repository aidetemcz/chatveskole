// Z content/skills a content/sady.yaml vytvoří:
//   plugins/aidetem-<sada>/.claude-plugin/plugin.json + skills/<slug>/   (v gitu — marketplace je čte z GitHubu)
//   .claude-plugin/marketplace.json                                     (v gitu)
//   public/download/skills/<slug>.zip          ZIP pro Claude a Gemini: složka <slug>/ v kořeni
//   public/download/skills/<slug>-copilot.zip  ZIP pro Microsoft Copilot: SKILL.md v kořeni
//   public/download/pluginy/aidetem-<sada>.zip ZIP pluginu: složka aidetem-<sada>/ v kořeni
// Znalostní soubory do ZIPů nepatří (leží na Google Disku).
//
// Spouští se před buildem (npm run build). Ručně: `npm run balicky`.
// `node scripts/build-balicky.mjs --kontrola` jen ověří, že plugins/ a marketplace.json odpovídají content/.
// Nahrazuje dřívější scripts/build-plugins.py (stejný výstup).
import fs from 'node:fs';
import path from 'node:path';
import { load } from 'js-yaml';
import { zipSync } from 'fflate';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
process.chdir(ROOT);

const WEB = 'https://chatveskole.cz';
const REPO = 'https://github.com/aidetemcz/chatveskole';
const AUTOR = { name: 'AI dětem, z. s.', url: 'https://aidetem.cz' };
const KONTROLA = process.argv.includes('--kontrola');
const DATUM = new Date('2026-01-01T00:00:00Z'); // pevné datum v ZIPech → stejný obsah, stejný soubor

const sady = load(fs.readFileSync('content/sady.yaml', 'utf8'));

/** Soubory skillu, které patří do balíčku: SKILL.md + references/** (relativní cesta → obsah). */
function souborySkillu(slug) {
  const d = path.join('content/skills', slug);
  const out = { 'SKILL.md': fs.readFileSync(path.join(d, 'SKILL.md')) };
  const ref = path.join(d, 'references');
  if (fs.existsSync(ref)) {
    for (const f of fs.readdirSync(ref, { recursive: true, withFileTypes: true })) {
      if (!f.isFile()) continue;
      const abs = path.join(f.parentPath, f.name);
      out[path.relative(d, abs).split(path.sep).join('/')] = fs.readFileSync(abs);
    }
  }
  return out;
}

const zip = (soubory) => zipSync(
  Object.fromEntries(Object.entries(soubory).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, [new Uint8Array(v), { mtime: DATUM }]])),
  { level: 9 },
);
const sPredponou = (pred, soubory) => Object.fromEntries(Object.entries(soubory).map(([k, v]) => [`${pred}/${k}`, v]));
const json = (o) => JSON.stringify(o, null, 2) + '\n';

// ---------------------------------------------------------------- pluginy + marketplace (očekávaný stav)
const ocekavane = new Map(); // cesta → obsah
const marketplace = {
  name: 'aidetem',
  owner: AUTOR,
  metadata: { description: 'Skills pro učitele a vedení škol z webu Chatboti ve škole (chatveskole.cz).' },
  plugins: [],
};
const pluginy = {};
for (const sada of sady) {
  const name = `aidetem-${sada.slug}`;
  const stavy = sada.skills.map((slug) => load(fs.readFileSync(`content/skills/${slug}/meta.yaml`, 'utf8')).stav ?? 'koncept');
  const version = stavy.every((s) => s === 'hotovo') ? '1.0.0' : '0.1.0'; // 0.x, dokud není vše „hotovo“
  const manifest = {
    name, version,
    description: sada.popis,
    author: AUTOR,
    homepage: `${WEB}/sady/${sada.slug}`,
    repository: REPO,
    keywords: ['škola', 'učitelé', 'vzdělávání', sada.title],
  };
  const soubory = { '.claude-plugin/plugin.json': Buffer.from(json(manifest)) };
  for (const slug of sada.skills) Object.assign(soubory, sPredponou(`skills/${slug}`, souborySkillu(slug)));
  pluginy[name] = soubory;
  for (const [k, v] of Object.entries(soubory)) ocekavane.set(`plugins/${name}/${k}`, v);
  marketplace.plugins.push({ name, source: `./plugins/${name}`, description: sada.popis, version });
}
ocekavane.set('.claude-plugin/marketplace.json', Buffer.from(json(marketplace)));

const existujici = (dir) => fs.existsSync(dir)
  ? fs.readdirSync(dir, { recursive: true, withFileTypes: true }).filter((f) => f.isFile()).map((f) => path.join(f.parentPath, f.name).split(path.sep).join('/'))
  : [];

if (KONTROLA) {
  const rozdily = [];
  for (const [p, obsah] of ocekavane) if (!fs.existsSync(p) || !fs.readFileSync(p).equals(obsah)) rozdily.push(p);
  for (const p of existujici('plugins')) if (!ocekavane.has(p)) rozdily.push(`${p} (navíc)`);
  if (rozdily.length) {
    console.error(`plugins/ neodpovídá content/ (${rozdily.length} souborů, např. ${rozdily.slice(0, 3).join(', ')}) — spusťte \`npm run balicky\` a změny commitněte.`);
    process.exit(1);
  }
  process.exit(0);
}

fs.rmSync('plugins', { recursive: true, force: true });
for (const [p, obsah] of ocekavane) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, obsah);
}

// ---------------------------------------------------------------- ZIPy ke stažení (public/download, není v gitu)
fs.rmSync('public/download', { recursive: true, force: true });
fs.mkdirSync('public/download/skills', { recursive: true });
fs.mkdirSync('public/download/pluginy', { recursive: true });
const skillSlugy = fs.readdirSync('content/skills', { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
for (const slug of skillSlugy) {
  const s = souborySkillu(slug);
  fs.writeFileSync(`public/download/skills/${slug}.zip`, zip(sPredponou(slug, s)));
  fs.writeFileSync(`public/download/skills/${slug}-copilot.zip`, zip(s));
}
for (const [name, soubory] of Object.entries(pluginy)) {
  fs.writeFileSync(`public/download/pluginy/${name}.zip`, zip(sPredponou(name, soubory)));
}
console.log(`balíčky: ${skillSlugy.length} skills (2 ZIPy), ${Object.keys(pluginy).length} pluginů, marketplace.json`);

// Kontrola interních odkazů ve vygenerovaném webu (dist/).
// Projde všechny HTML soubory, najde href/src začínající base (např. /chatveskole/ nebo /)
// a ověří, že cílový soubor existuje. Kotvy (#...) kontroluje proti id na cílové stránce.
// Použití: node scripts/check-links.mjs   (base se bere z BASE_PATH, výchozí "/")
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const BASE = ((process.env.BASE_PATH || '/').replace(/\/?$/, '/'));
if (!fs.existsSync(DIST)) { console.error('Chybí dist/ — nejdřív spusťte npm run build.'); process.exit(1); }

const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p); else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

const idsCache = new Map();
function idsOf(file) {
  if (!idsCache.has(file)) {
    const html = fs.readFileSync(file, 'utf8');
    idsCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idsCache.get(file);
}

function resolveTarget(urlPath) {
  let rel = decodeURIComponent(urlPath.slice(BASE.length));
  const p = path.join(DIST, rel);
  if (rel === '' || rel.endsWith('/')) return fs.existsSync(path.join(p, 'index.html')) ? path.join(p, 'index.html') : null;
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  if (fs.existsSync(path.join(p, 'index.html'))) return path.join(p, 'index.html');
  return null;
}

const problems = [];
const warnings = [];
let count = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const page = '/' + path.relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  // přesměrovací stránka staré URL: chybějící kotva je jen varování (staré kategorie promptů)
  const presmerovani = html.includes('http-equiv="refresh"');
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const raw = m[1].replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(raw)) continue;
    if (raw.startsWith('#')) {
      if (raw.length > 1 && !idsOf(file).has(decodeURIComponent(raw.slice(1)))) problems.push(`${page}: kotva ${raw} na stránce neexistuje`);
      continue;
    }
    if (!raw.startsWith('/')) { problems.push(`${page}: relativní odkaz ${raw}`); continue; }
    count++;
    const [pathPart, hash] = raw.split('#');
    const clean = pathPart.split('?')[0];
    if (!clean.startsWith(BASE)) { problems.push(`${page}: odkaz bez base ${BASE}: ${raw}`); continue; }
    const target = resolveTarget(clean);
    if (!target) { problems.push(`${page}: neexistuje ${raw}`); continue; }
    if (hash && target.endsWith('.html') && !idsOf(target).has(decodeURIComponent(hash))) (presmerovani ? warnings : problems).push(`${page}: kotva #${hash} v ${clean} neexistuje`);
  }
}

const uniq = [...new Set(problems)];
const varovani = [...new Set(warnings)];
if (varovani.length) {
  console.log(`Varování (stará adresa vede na stránku, ale kotva tam není): ${varovani.length}`);
  for (const w of varovani) console.log('  ! ' + w);
}
console.log(`Odkazy: ${htmlFiles.length} stránek, ${count} interních odkazů, problémů: ${uniq.length}`);
for (const p of uniq.slice(0, 200)) console.log('  ✗ ' + p);
if (uniq.length > 200) console.log(`  … a dalších ${uniq.length - 200}`);
process.exit(uniq.length ? 1 : 0);

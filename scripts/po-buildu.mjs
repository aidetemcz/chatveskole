// Po buildu Astra: přesměrovací stránky starých URL, sitemap.xml a robots.txt v dist/.
// GitHub Pages neumí skutečná přesměrování (301), proto pro každou starou adresu vznikne
// malá stránka s okamžitým přesměrováním (meta refresh + odkaz). Na Vercelu/Netlify by šlo použít migrace/redirects.json přímo.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const BASE = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const SITE = (process.env.SITE_URL || 'https://chatveskole.cz').replace(/\/$/, '');
const NAHLED = BASE !== '/'; // web na podadrese (GitHub Pages) = náhled, nemá se indexovat
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// 1) přesměrování
const { redirects } = JSON.parse(fs.readFileSync('migrace/redirects.json', 'utf8'));
let nPres = 0;
const preskoceno = [];
for (const r of redirects) {
  if (/[:*]/.test(r.source)) { preskoceno.push(r.source); continue; } // zástupné znaky statický web neumí
  const zdroj = decodeURIComponent(r.source).replace(/^\/|\/$/g, '');
  const soubor = path.join(DIST, zdroj, 'index.html');
  if (fs.existsSync(soubor)) { preskoceno.push(r.source + ' (stránka existuje)'); continue; }
  const cil = /^https?:/.test(r.destination) ? r.destination : BASE.replace(/\/$/, '') + r.destination;
  fs.mkdirSync(path.dirname(soubor), { recursive: true });
  fs.writeFileSync(soubor, `<!doctype html>
<html lang="cs"><head><meta charset="utf-8"><title>Přesměrování…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${esc(/^https?:/.test(cil) ? cil : SITE + cil.split('#')[0])}">
<meta http-equiv="refresh" content="0; url=${esc(cil)}">
<script>location.replace(${JSON.stringify(cil)} + (location.hash && !${JSON.stringify(cil)}.includes('#') ? location.hash : ''))</script>
</head><body><p>Stránka se přesunula: <a href="${esc(cil)}">pokračovat na novou adresu</a>.</p></body></html>
`);
  nPres++;
}

// 2) sitemap.xml — stránky webu bez noindex a bez přesměrování
const stranky = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!['_astro', 'pagefind', 'download', 'archiv', 'img'].includes(e.name)) walk(p); }
    else if (e.name === 'index.html') stranky.push(p);
  }
})(DIST);
const urls = stranky
  .filter((f) => { const h = fs.readFileSync(f, 'utf8'); return !h.includes('http-equiv="refresh"') && !/<meta name="robots" content="noindex"[^>]*data-stranka/.test(h); })
  .map((f) => SITE + BASE + path.relative(DIST, path.dirname(f)).split(path.sep).join('/').replace(/^(.+)$/, '$1/'))
  .map((u) => u.replace(/\/\/$/, '/'))
  .sort();
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${esc(u)}</loc></url>`).join('\n')}
</urlset>
`);

// 3) robots.txt (na podadrese ho vyhledávače nečtou — náhled chrání meta noindex na každé stránce)
fs.writeFileSync(path.join(DIST, 'robots.txt'), NAHLED
  ? 'User-agent: *\nDisallow: /\n'
  : `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`Přesměrování: ${nPres}, přeskočeno ${preskoceno.length}${preskoceno.length ? ' (' + preskoceno.join(', ') + ')' : ''}`);
console.log(`Sitemap: ${urls.length} stránek${NAHLED ? ' · náhled: noindex na všech stránkách' : ''}`);

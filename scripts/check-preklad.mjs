// Texty rozhraní pro slovenskou verzi: najde všechna volání t('…') a tf('…') ve zdrojích
// a vypíše ty, které chybí v src/i18n/sk.json (a klíče, které se už nikde nepoužívají).
// Použití: node scripts/check-preklad.mjs [--json]  (s --json vypíše chybějící jako JSON k doplnění)
import fs from 'node:fs';
import path from 'node:path';

const klice = new Set();
const VOLANI = /\btf?\(\s*(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;
(function projdi(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { projdi(p); continue; }
    if (!/\.(astro|ts|mjs)$/.test(e.name) || p.endsWith('jazyk.ts')) continue;
    const s = fs.readFileSync(p, 'utf8');
    for (const m of s.matchAll(VOLANI)) {
      if (m[1] === '`' && m[2].includes('${')) continue; // šablonový řetězec s proměnnou — ručně
      klice.add(m[2].replace(/\\(['"`\\])/g, '$1').replace(/\\n/g, '\n'));
    }
  }
})('src');
// klíče předávané do t() proměnnou (měsíce v src/components/data/CasovaOsa.astro)
for (const m of ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']) klice.add(m);
const sk = JSON.parse(fs.readFileSync('src/i18n/sk.json', 'utf8'));
const chybi = [...klice].filter((k) => !(k in sk)).sort();
const navic = Object.keys(sk).filter((k) => !klice.has(k));
if (process.argv.includes('--json')) {
  console.log(JSON.stringify(Object.fromEntries(chybi.map((k) => [k, ''])), null, 2));
} else {
  console.log(`Texty rozhraní: ${klice.size}, přeloženo ${klice.size - chybi.length}, chybí ${chybi.length}, nepoužité ${navic.length}`);
  for (const k of chybi) console.log('  chybí: ' + k);
  for (const k of navic) console.log('  nepoužitý: ' + k);
}

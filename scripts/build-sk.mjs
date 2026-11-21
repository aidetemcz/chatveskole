// Slovenská verze webu: druhý build Astra s JAZYK=sk (obsah z content/sk, data z data/sk, texty rozhraní ze src/i18n/sk.json).
// Astro ji postaví do dist-sk/ s base …/sk/ a tento skript ji přesune do dist/sk/. Spouští se z `npm run build` po českém buildu.
// Dokud není slovenský obsah (content/sk/stranky), nic nedělá.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

if (!fs.existsSync('content/sk/stranky')) {
  console.log('Slovenská verze: content/sk/stranky neexistuje, přeskakuji.');
  process.exit(0);
}
fs.rmSync('dist-sk', { recursive: true, force: true });
execSync('npx astro build', { stdio: 'inherit', env: { ...process.env, JAZYK: 'sk' } });
const cil = path.join('dist', 'sk');
fs.rmSync(cil, { recursive: true, force: true });
fs.renameSync('dist-sk', cil);
// export starého WordPressu patří jen k české verzi
fs.rmSync(path.join(cil, 'archiv'), { recursive: true, force: true });
// ZIPy zručností ze slovenského obsahu (pluginy zatím z české verze — plugins/ se generuje z content/)
execSync('node scripts/build-downloads.mjs', { stdio: 'inherit', env: { ...process.env, JAZYK: 'sk' } });
console.log('Slovenská verze: dist/sk/');

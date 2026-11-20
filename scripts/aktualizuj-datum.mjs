// Nastaví `aktualizovano` na dnešní datum u stránek, které se změnily oproti origin/main
// (commitnuté i necommitnuté změny). Spouštět před commitem: npm run datum
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const sh = (c) => execSync(c, { encoding: 'utf8' }).trim();
const dnes = new Date().toISOString().slice(0, 10);
let zaklad = 'origin/main';
try { sh(`git rev-parse --verify ${zaklad}`); } catch { zaklad = 'HEAD'; }

const soubory = new Set(
  [sh(`git diff --name-only ${zaklad} -- content/stranky`), sh('git ls-files --others --exclude-standard content/stranky')]
    .join('\n').split('\n').filter((f) => f.endsWith('.md') && existsSync(f)),
);

// Změnil se v souboru i jiný řádek než samotné datum?
const vecnaZmena = (f) => {
  let diff;
  try { diff = sh(`git diff -U0 ${zaklad} -- "${f}"`); } catch { return true; }
  if (!diff) return true; // nový, ještě nesledovaný soubor
  return diff.split('\n').some((r) => /^[+-](?![+-])/.test(r) && !/^[+-]aktualizovano:/.test(r));
};

for (const f of soubory) {
  if (!vecnaZmena(f)) continue;
  const t = readFileSync(f, 'utf8');
  const m = t.match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  let fm = m[1];
  if (/^aktualizovano:/m.test(fm)) {
    if (fm.match(/^aktualizovano:\s*(\S+)/m)[1] === dnes) continue;
    fm = fm.replace(/^aktualizovano:.*$/m, `aktualizovano: ${dnes}`);
  } else {
    fm += `\naktualizovano: ${dnes}`;
  }
  writeFileSync(f, t.replace(m[0], `---\n${fm}\n---`));
  console.log(`${f} → ${dnes}`);
}

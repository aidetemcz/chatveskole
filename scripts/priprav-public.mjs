// Před buildem zkopíruje obrázky ze starého webu (archiv/uploads) do public/archiv/uploads,
// aby fungovaly odkazy /archiv/uploads/… i přesměrování /wp-content/uploads/* (viz docs/architektura.md).
// public/archiv není v gitu — zdrojem je archiv/uploads.
import fs from 'node:fs';

// Mezipaměť obsahu Astra se neobnoví při změně src/lib/rehype-obsah.mjs — před buildem ji smažeme
// (build trvá pár sekund, tak to nevadí; jinak by se na Vercelu mohlo použít staré vykreslení).
fs.rmSync('node_modules/.astro', { recursive: true, force: true });
fs.rmSync('.astro/data-store.json', { force: true });

const zdroj = 'archiv/uploads';
const cil = 'public/archiv/uploads';
if (!fs.existsSync(zdroj)) {
  console.warn(`${zdroj} neexistuje — spusťte node scripts/export-wordpress.mjs --images`);
  process.exit(0);
}
fs.rmSync(cil, { recursive: true, force: true });
fs.cpSync(zdroj, cil, { recursive: true });
console.log(`${cil}: zkopírováno`);

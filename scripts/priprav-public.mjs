// Před buildem zkopíruje obrázky ze starého webu (archiv/uploads) do public/archiv/uploads,
// aby fungovaly odkazy /archiv/uploads/… i přesměrování /wp-content/uploads/* (viz docs/architektura.md).
// public/archiv není v gitu — zdrojem je archiv/uploads.
import fs from 'node:fs';

const zdroj = 'archiv/uploads';
const cil = 'public/archiv/uploads';
if (!fs.existsSync(zdroj)) {
  console.warn(`${zdroj} neexistuje — spusťte node scripts/export-wordpress.mjs --images`);
  process.exit(0);
}
fs.rmSync(cil, { recursive: true, force: true });
fs.cpSync(zdroj, cil, { recursive: true });
console.log(`${cil}: zkopírováno`);

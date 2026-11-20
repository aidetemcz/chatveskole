// Vygeneruje vercel.json (trvalá přesměrování 301 starých URL) z migrace/redirects.json.
// Vercel čte vercel.json z kořene repozitáře ještě před buildem, proto je soubor v gitu.
//   node scripts/build-vercel.mjs          → zapíše vercel.json
//   node scripts/build-vercel.mjs --check  → jen ověří, že vercel.json odpovídá redirects.json
import fs from 'node:fs';

const { redirects } = JSON.parse(fs.readFileSync('migrace/redirects.json', 'utf8'));

// Cíl s lomítkem na konci (web má adresy /stranka/), kotvu a parametry zachovat.
const sLomitkem = (d) => {
  const m = d.match(/^([^?#]*)(.*)$/);
  let cesta = m[1];
  if (!cesta.endsWith('/') && !cesta.includes(':path') && !/\.[a-z0-9]{2,4}$/i.test(cesta)) cesta += '/';
  return cesta + m[2];
};

const pravidla = [];
for (const r of redirects) {
  const cil = sLomitkem(r.destination);
  if (r.source.includes(':path')) {
    pravidla.push({ source: r.source, destination: r.destination, permanent: true });
    continue;
  }
  // stará adresa může přijít s lomítkem i bez něj
  const zaklad = r.source.replace(/\/$/, '');
  pravidla.push({ source: zaklad, destination: cil, permanent: true });
  pravidla.push({ source: `${zaklad}/`, destination: cil, permanent: true });
}

const vercel = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  trailingSlash: true,
  redirects: pravidla,
};
const obsah = JSON.stringify(vercel, null, 2) + '\n';

if (process.argv.includes('--check')) {
  const ted = fs.existsSync('vercel.json') ? fs.readFileSync('vercel.json', 'utf8') : '';
  if (ted !== obsah) {
    console.error('vercel.json neodpovídá migrace/redirects.json — spusťte node scripts/build-vercel.mjs');
    process.exit(1);
  }
  console.log(`vercel.json: ${pravidla.length} přesměrování, v pořádku`);
} else {
  fs.writeFileSync('vercel.json', obsah);
  console.log(`vercel.json: ${pravidla.length} přesměrování`);
}

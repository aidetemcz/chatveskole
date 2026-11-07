// Vytvoří vercel.json z migrace/redirects.json (176 trvalých přesměrování starých URL).
// Spouští se automaticky před buildem (npm run build) a ručně přes `npm run redirects`.
// vercel.json needitujte ručně — změny dělejte v migrace/redirects.json (nebo scripts/build-inventura.py).
import fs from 'node:fs';

const { redirects } = JSON.parse(fs.readFileSync('migrace/redirects.json', 'utf8'));

const vercel = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: 'astro',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  cleanUrls: true,
  // Staré WordPress adresy končily lomítkem (/kontakt/). Vercel je nejdřív přesměruje bez lomítka,
  // pak platí pravidla níže.
  trailingSlash: false,
  redirects: redirects.map(({ source, destination, permanent }) => ({ source, destination, permanent })),
};

const text = JSON.stringify(vercel, null, 2) + '\n';
if (process.argv.includes('--kontrola')) {
  const ted = fs.existsSync('vercel.json') ? fs.readFileSync('vercel.json', 'utf8') : '';
  if (ted !== text) {
    console.error('vercel.json neodpovídá migrace/redirects.json — spusťte `npm run redirects`.');
    process.exit(1);
  }
} else {
  fs.writeFileSync('vercel.json', text);
  console.log(`vercel.json: ${redirects.length} přesměrování`);
}

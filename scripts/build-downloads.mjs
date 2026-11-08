// ZIPy ke stažení: skills (Claude/Gemini a Copilot) a pluginy podle sad.
// Výstup do public/download/ (není v gitu), spouští se před buildem i dev serverem.
import fs from 'node:fs';
import path from 'node:path';
import { zipSync, strToU8 } from 'fflate';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'public', 'download');
const SKILLS = path.join(ROOT, 'content', 'skills');
const PLUGINS = path.join(ROOT, 'plugins');

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
const pack = (files) => zipSync(files, { level: 9, mtime: new Date('2026-01-01T00:00:00Z') });

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'skills'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'pluginy'), { recursive: true });

let nSkills = 0;
for (const slug of fs.readdirSync(SKILLS)) {
  const dir = path.join(SKILLS, slug);
  if (!fs.existsSync(path.join(dir, 'SKILL.md'))) continue;
  const claude = {};   // složka <slug>/ v kořeni (Claude, Gemini)
  const copilot = {};  // SKILL.md v kořeni (Microsoft Copilot)
  const add = (abs) => {
    const rel = path.relative(dir, abs).split(path.sep).join('/');
    const data = fs.readFileSync(abs);
    claude[`${slug}/${rel}`] = data;
    copilot[rel] = data;
  };
  add(path.join(dir, 'SKILL.md'));
  const refs = path.join(dir, 'references');
  if (fs.existsSync(refs)) walk(refs).forEach(add);
  fs.writeFileSync(path.join(OUT, 'skills', `${slug}.zip`), pack(claude));
  fs.writeFileSync(path.join(OUT, 'skills', `${slug}-copilot.zip`), pack(copilot));
  nSkills++;
}

let nPlugins = 0;
if (fs.existsSync(PLUGINS)) {
  for (const name of fs.readdirSync(PLUGINS)) {
    const dir = path.join(PLUGINS, name);
    if (!fs.existsSync(path.join(dir, '.claude-plugin', 'plugin.json'))) continue;
    const files = {};
    for (const abs of walk(dir)) files[`${name}/${path.relative(dir, abs).split(path.sep).join('/')}`] = fs.readFileSync(abs);
    fs.writeFileSync(path.join(OUT, 'pluginy', `${name}.zip`), pack(files));
    nPlugins++;
  }
}
console.log(`ZIPy: ${nSkills} skills (×2), ${nPlugins} pluginů → public/download/`);

// Obrázky ze starého webu (archiv/uploads), na které odkazuje obsah → public/archiv/uploads/
const ARCHIV = path.join(ROOT, 'archiv', 'uploads');
const ARCHIV_OUT = path.join(ROOT, 'public', 'archiv', 'uploads');
fs.rmSync(path.join(ROOT, 'public', 'archiv'), { recursive: true, force: true });
let nImg = 0;
const chybi = [];
for (const base of ['content/stranky', 'content/prompty']) {
  for (const f of walk(path.join(ROOT, base)).filter((f) => f.endsWith('.md'))) {
    for (const m of fs.readFileSync(f, 'utf8').matchAll(/\/archiv\/uploads\/([^\s)"'>]+)/g)) {
      const rel = decodeURIComponent(m[1]);
      const src = path.join(ARCHIV, rel);
      const dst = path.join(ARCHIV_OUT, rel);
      if (fs.existsSync(dst)) continue;
      if (!fs.existsSync(src)) { chybi.push(rel); continue; }
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.copyFileSync(src, dst);
      nImg++;
    }
  }
}
console.log(`Obrázky z archivu: ${nImg}` + (chybi.length ? `, chybí ${chybi.length}: ${chybi.join(', ')}` : ''));

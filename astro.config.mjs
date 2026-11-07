// @ts-check
import { defineConfig } from 'astro/config';

// Statický web. Markdown z content/ vykresluje src/lib/markdown.ts (vlastní pluginy, místa pro komponenty).
// Přesměrování starých URL řeší vercel.json (generuje scripts/build-vercel-json.mjs).
export default defineConfig({
  site: 'https://chatveskole.cz',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});

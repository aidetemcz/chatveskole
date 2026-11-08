// @ts-check
import { defineConfig } from 'astro/config';
import remarkDropH1 from './src/lib/remark-drop-h1.mjs';
import remarkHeadingId from './src/lib/remark-heading-id.mjs';
import rehypeBase from './src/lib/rehype-base.mjs';

// GitHub Pages: BASE_PATH=/chatveskole, SITE_URL=https://aidetemcz.github.io
// Vlastní doména chatveskole.cz: BASE_PATH=/ (výchozí)
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://chatveskole.cz',
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkDropH1, remarkHeadingId],
    rehypePlugins: [[rehypeBase, { base }]],
  },
});

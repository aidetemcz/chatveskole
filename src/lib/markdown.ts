import { unified } from '@astrojs/markdown-remark';
import rehypeObsah from './rehype-obsah.mjs';

/**
 * Vykreslení Markdownu z content/ (stránky, prompty, prompt.md skills).
 * Komentář <!-- komponenta: … --> v textu se nahradí místem, kam šablona vloží komponentu
 * (dlaždice sad, databáze promptů …). Vrací střídající se kusy HTML a názvy komponent.
 */
const procesor = unified({
  gfm: true,
  smartypants: false, // neměnit uvozovky a pomlčky v promptech
  rehypePlugins: [rehypeObsah],
}).createRenderer({ syntaxHighlight: false });

/** Komponenty, které už web umí; ostatní značky (fáze 4) zatím nic nevykreslí. */
const KOMPONENTY: Array<[RegExp, string]> = [
  [/^dlaždice sad a skills/, 'sady-skills'],
  [/^dlaždice sad/, 'sady-homepage'],
  [/^karty sad/, 'sady-pluginy'],
  [/^databáze promptů/, 'databaze-promptu'],
];

export type Cast = { html: string } | { komponenta: string };

export async function vykreslit(md: string): Promise<Cast[]> {
  const nazvy: string[] = [];
  const zdroj = md.replace(/<!--\s*komponenta:\s*([\s\S]*?)-->/g, (_, popis: string) => {
    const nalez = KOMPONENTY.find(([re]) => re.test(popis.trim()));
    if (!nalez) return '';
    nazvy.push(nalez[1]);
    return `\n\n<div data-komponenta="${nalez[1]}"></div>\n\n`;
  });
  const { code } = await (await procesor).render(zdroj);
  const casti: Cast[] = [];
  const kusy = code.split(/<div data-komponenta="[\w-]+"><\/div>/);
  kusy.forEach((html, i) => {
    casti.push({ html });
    if (i < nazvy.length) casti.push({ komponenta: nazvy[i] });
  });
  return casti;
}

/** Jen HTML (bez komponent). */
export async function vykreslitHtml(md: string): Promise<string> {
  return (await vykreslit(md)).map((c) => ('html' in c ? c.html : '')).join('');
}

/** Texty promptů z bloků ```text (pro tlačítko Kopírovat v kartách). */
export function textyPromptu(md: string): string[] {
  return [...md.matchAll(/```text\r?\n([\s\S]*?)```/g)].map((m) => m[1].trimEnd());
}

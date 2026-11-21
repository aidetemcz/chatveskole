// Jazyk buildu: čeština (výchozí) nebo slovenština (JAZYK=sk → web na /sk/).
// Slovenský web se staví ze stejných šablon jako český; liší se obsah (content/sk, data/sk)
// a texty rozhraní, které jsou v šablonách obalené funkcí t() a přeložené v src/i18n/sk.json.
import fs from 'node:fs';
import path from 'node:path';
import sk from '../i18n/sk.json';

export type Jazyk = 'cs' | 'sk';
export const JAZYK: Jazyk = process.env.JAZYK === 'sk' ? 'sk' : 'cs';
export const SK = JAZYK === 'sk';

const ROOT = process.cwd();
/** Kořen obsahu: content/ (cs) nebo content/sk/ (sk). */
export const OBSAH = SK ? 'content/sk' : 'content';
/** Cesta k datovému souboru: data/sk/<soubor>, pokud existuje, jinak data/<soubor>. */
export function dataSoubor(soubor: string): string {
  const sk = path.join('data/sk', soubor);
  return SK && fs.existsSync(path.join(ROOT, sk)) ? sk : path.join('data', soubor);
}

const slovnik: Record<string, string> = SK ? (sk as Record<string, string>) : {};
/** Text rozhraní: v češtině vrátí text beze změny, ve slovenštině překlad ze src/i18n/sk.json (chybí-li, český text). */
export function t(text: string): string {
  if (!SK) return text;
  return slovnik[text] ?? text;
}
/** Formát data podle jazyka (např. 21. 11. 2026). */
export const LOCALE = SK ? 'sk-SK' : 'cs-CZ';
/** Text rozhraní s proměnnými: tf('Zobrazeno {n} z {celkem}', { n: 3, celkem: 10 }). */
export function tf(text: string, promenne: Record<string, string | number>): string {
  return t(text).replace(/\{(\w+)\}/g, (cely, k) => (k in promenne ? String(promenne[k]) : cely));
}

export { SK_ZVEREJNENO } from './zverejneni.mjs';
import { SK_ZVEREJNENO } from './zverejneni.mjs';
/** Ukázat přepínač CZ/SK: ve slovenské verzi vždy (odkaz zpět), v české až po zveřejnění. */
export const PREPINAC = SK || SK_ZVEREJNENO;
const ZAKLAD = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
/** Adresa stejné stránky v daném jazyce; cesta je bez base (např. /funkce/skills/). */
export function urlJazyka(jazyk: Jazyk, cesta: string): string {
  return ZAKLAD + (jazyk === 'sk' ? 'sk/' : '') + cesta.replace(/^\//, '');
}

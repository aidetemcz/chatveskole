import fs from 'node:fs';
import path from 'node:path';
import { load as nactiYamlText } from 'js-yaml';

const ROOT = process.cwd();

/** Načte YAML z repozitáře (content/navigace.yaml, data/ceny.yaml …). */
export function nactiYaml<T = unknown>(cesta: string): T {
  return nactiYamlText(fs.readFileSync(path.join(ROOT, cesta), 'utf8')) as T;
}

export interface PolozkaMenu { title: string; href: string; zvyraznit?: boolean }
export interface SekceMenu { title: string; items: PolozkaMenu[] }
export interface Navigace { menu: SekceMenu[]; cta: PolozkaMenu }

export const navigace = nactiYaml<Navigace>('content/navigace.yaml');

/**
 * Produkce = nasazení na chatveskole.cz (Vercel nastaví VERCEL_ENV=production).
 * V produkci se zobrazí jen schválený obsah (stav „hotovo“), na náhledu vše se štítkem „Koncept“.
 */
export const jeProdukce = process.env.VERCEL_ENV === 'production';
export const zobrazit = (stav?: string) => !jeProdukce || !stav || stav === 'hotovo' || stav === 'prevzato';
export const jeKoncept = (stav?: string) => !!stav && stav !== 'hotovo' && stav !== 'prevzato';

/** Název sekce menu, do které patří URL (pro eyebrow nad H1). */
export function sekceProUrl(url: string): string | undefined {
  return navigace.menu.find((s) => s.items.some((i) => i.href === url))?.title;
}

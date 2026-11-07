import { getCollection, type CollectionEntry } from 'astro:content';
import { zobrazit } from './web';
import { textyPromptu } from './markdown';

export const PRO_KOHO: Record<string, string> = {
  ucitele: 'Učitelé',
  vedeni: 'Vedení školy',
  'zaci-18plus': 'Žáci 18+',
};

export interface Skill {
  slug: string;
  meta: CollectionEntry<'skillMeta'>['data'];
  description: string;
  promptMd: string;
  prompt: string; // základní prompt (první blok ```text)
  sady: CollectionEntry<'sady'>['data'][];
}

/** Skills k zobrazení (v produkci jen „hotovo“), seřazené podle pořadí v sadách. */
export async function nactiSkills(): Promise<Skill[]> {
  const [metas, skills, prompty, sady] = await Promise.all([
    getCollection('skillMeta'), getCollection('skills'), getCollection('skillPrompty'), getCollection('sady'),
  ]);
  const poradi = sady.flatMap((s) => s.data.skills);
  return metas
    .filter((m) => zobrazit(m.data.stav))
    .map((m) => {
      const promptMd = prompty.find((p) => p.id === m.id)?.body ?? '';
      return {
        slug: m.id,
        meta: m.data,
        description: skills.find((s) => s.id === m.id)?.data.description ?? '',
        promptMd,
        prompt: textyPromptu(promptMd)[0] ?? '',
        sady: m.data.sady.map((s) => sady.find((x) => x.id === s)!.data).filter(Boolean),
      };
    })
    .sort((a, b) => poradi.indexOf(a.slug) - poradi.indexOf(b.slug));
}

export async function nactiSady() {
  return (await getCollection('sady')).map((s) => s.data);
}

export const zipSkillu = (slug: string) => `/download/skills/${slug}.zip`;
export const zipCopilot = (slug: string) => `/download/skills/${slug}-copilot.zip`;
export const zipPluginu = (sada: string) => `/download/pluginy/aidetem-${sada}.zip`;

/** Odkazy z meta.yaml mohou být řetězec nebo seznam. */
export const seznam = (v?: string | string[]) => (v == null ? [] : Array.isArray(v) ? v : [v]);

export const SKUPINY_PROMPTU = {
  pedagogove: 'Pro pedagogy a vedení škol',
  zaci: 'Pro žáky',
  'archiv-2024': 'Starší prompty (2024)',
} as const;

import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { load as nactiYamlText } from 'js-yaml';

/** ID = cesta bez přípony, např. "zaciname/registrace" → URL /zaciname/registrace */
const idZCesty = ({ entry }: { entry: string }) => entry.replace(/\.(md|ya?ml)$/, '');
/** ID skillu = název složky */
const idSlozky = ({ entry }: { entry: string }) => entry.split('/')[0];

const stav = z.enum(['koncept', 'ke-kontrole', 'hotovo']);
const datum = z.coerce.date();

const stranky = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/stranky', generateId: idZCesty }),
  schema: z.object({
    title: z.string(),
    popis: z.string().max(320),
    menu: z.string().optional(),
    poradi: z.number().int().optional(),
    sablona: z.enum(['homepage', 'cenik', 'zmeny-funkci']).optional(),
    data: z.string().optional(),
    aktualizovano: datum,
    stav,
    zdroje: z.array(z.union([z.string(), z.object({ nazev: z.string().optional(), url: z.string() }).loose()])).optional(),
    souvisejici_prompty: z.array(z.string()).optional(),
  }).strict(),
});

const skills = defineCollection({
  loader: glob({ pattern: '*/SKILL.md', base: './content/skills', generateId: idSlozky }),
  schema: z.object({
    name: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/).max(64),
    description: z.string().min(1).max(1024).refine((s) => !/[<>]/.test(s), 'description nesmí obsahovat < >'),
  }).strict(),
});

const skillPrompty = defineCollection({
  loader: glob({ pattern: '*/prompt.md', base: './content/skills', generateId: idSlozky }),
  schema: z.object({ title: z.string(), typ: z.literal('prompt') }),
});

const odkazy = z.union([z.string(), z.array(z.string())]);
const skillMeta = defineCollection({
  loader: glob({ pattern: '*/meta.yaml', base: './content/skills', generateId: idSlozky }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    kratky_popis: z.string(),
    pro_koho: z.array(z.enum(['ucitele', 'vedeni', 'zaci-18plus'])),
    sady: z.array(z.string()),
    stitky: z.array(z.string()).default([]),
    rezimy: z.array(z.string()).optional(),
    puvodni_obsah: z.array(z.object({ url: z.string(), typ: z.string() }).loose()),
    puvodni_asistenti: z.object({
      gpt: odkazy.optional(),
      gem: odkazy.optional(),
      systemovy_prompt: odkazy.optional(),
    }).loose().optional(),
    google_doc: z.string().optional(),
    google_slozka: z.string().optional(),
    autori: z.array(z.string()),
    metodika: z.array(z.object({ nazev: z.string(), url: z.string().optional() }).loose()).optional(),
    znalosti: z.array(z.string()).optional(),
    vek: z.string().optional(),
    stav,
    aktualizovano: datum,
  }).loose(),
});

const prompty = defineCollection({
  loader: glob({ pattern: ['pedagogove/*.md', 'archiv-2024/*.md'], base: './content/prompty', generateId: ({ entry }) => entry.split('/')[1].replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    skupina: z.enum(['pedagogove', 'archiv-2024']),
    kategorie: z.array(z.string()),
    kategorie_slug: z.array(z.string()),
    skill: z.string().nullable().optional(),
    puvodni_url: z.string().optional(),
    puvodni_uprava: z.string().optional(),
    stav: z.enum(['prevzato', 'koncept', 'ke-kontrole', 'hotovo']),
  }).loose(),
});

const promptyZaci = defineCollection({
  loader: glob({ pattern: ['*.md', '_index.md'], base: './content/prompty/zaci', generateId: idZCesty }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    zpusob: z.string().optional(),
    pro_koho: z.literal('zaci'),
    vek: z.string(),
    puvodni_url: z.string().optional(),
    rozviji: z.string().optional(),
    proc_ho_vyuzit: z.string().optional(),
    tiny_chatbot: z.string().nullable().optional(),
    popis: z.string().optional(),
    aktualizovano: datum.optional(),
    stav: stav.optional(),
    zdroje: z.array(z.string()).optional(),
  }).loose(),
});

const sady = defineCollection({
  loader: file('content/sady.yaml', {
    parser: (text) => (nactiYamlText(text) as Array<Record<string, unknown>>).map((s) => ({ id: s.slug as string, ...s })),
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    popis: z.string(),
    pro_koho: z.array(z.string()),
    skills: z.array(z.string()),
  }).loose(),
});

const znalosti = defineCollection({
  loader: file('content/znalosti/znalosti.yaml'),
  schema: z.object({ nazev: z.string(), url: z.string(), verejne: z.boolean().default(true) }).loose(),
});

export const collections = { stranky, skills, skillPrompty, skillMeta, prompty, promptyZaci, sady, znalosti };

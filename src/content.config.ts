import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// id = cesta k souboru bez přípony (např. "zaciname/vekove-limity-a-legislativa", "vedeni/tvorba-skolnich-pravidel")
const idZCesty = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const stranky = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/stranky', generateId: idZCesty }),
  schema: z
    .object({
      title: z.string(),
      menu_titulek: z.string().nullable().optional(),
      popis: z.string().nullable().optional(),
      menu: z.string().nullable().optional(),
      poradi: z.number().optional(),
      sablona: z.string().nullable().optional(),
      stav: z.string().nullable().optional(),
      aktualizovano: z.coerce.date().optional(),
      zdroje: z.any().optional(),
      data: z.any().optional(),
    })
    .passthrough(),
});

const prompty = defineCollection({
  loader: glob({
    pattern: ['pedagogove/*.md', 'vedeni/*.md', 'archiv-2024/*.md', 'zaci/[!_]*.md'],
    base: './content/prompty',
    generateId: idZCesty,
  }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string().nullable().optional(),
      skupina: z.string().nullable().optional(),
      kategorie: z.array(z.string()).optional(),
      skill: z.string().nullable().optional(),
      puvodni_url: z.string().nullable().optional(),
      stav: z.string().nullable().optional(),
      zpusob: z.string().nullable().optional(),
      rozviji: z.string().nullable().optional(),
      proc_ho_vyuzit: z.string().nullable().optional(),
      tiny_chatbot: z.string().nullable().optional(),
    })
    .passthrough(),
});

const promptyUvod = defineCollection({
  loader: glob({ pattern: 'zaci/_index.md', base: './content/prompty', generateId: idZCesty }),
  schema: z.object({ title: z.string(), popis: z.string().nullable().optional() }).passthrough(),
});

export const collections = { stranky, prompty, promptyUvod };

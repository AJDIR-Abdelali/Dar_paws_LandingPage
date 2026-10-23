import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts: src/content/blog/<lang>/<slug>.md — see src/content/blog/README.md
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '{fr,en,ar}/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    emoji: z.string().default('🐾'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

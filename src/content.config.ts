import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const beritaCollection = defineCollection({
  // Loader baru untuk membaca semua file markdown di folder berita
  loader: glob({ pattern: '**/*.md', base: './src/content/berita' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Admin Desa'),
    image: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  'berita': beritaCollection,
};
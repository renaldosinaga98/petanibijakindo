import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Koleksi konten Artikel — diedit lewat Decap CMS (/admin) atau langsung
// sebagai file Markdown di repo GitHub ini. Setiap file .md di
// src/content/artikel/ menjadi satu artikel di /artikel/<slug>.
const artikel = defineCollection({
  loader: glob({ base: './src/content/artikel', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Budidaya Padi',
      'Budidaya Jagung',
      'Budidaya Sayuran',
      'Budidaya Buah',
      'Budidaya Palawija',
      'Perkebunan',
      'Pemupukan',
      'Pengendalian Hama',
      'Pengendalian Penyakit',
      'Teknologi Pertanian',
      'Manajemen Usaha Tani',
    ]),
    author: z.string().default('Renaldo Sinaga'),
    pubDate: z.coerce.date(),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { artikel };

import { z } from 'zod';

import { CATEGORIES, KINDS, TAGS } from '@/tools/markdown/constants';
import { union } from '@/tools/z/union';

export const zArticleMatter = z.object({
  authors: z.string(),
  banner: z.string(),
  kind: union(KINDS),
  tags: z.preprocess(
    (value) => (Array.isArray(value) ? value : [value]),
    union(TAGS).array(),
  ),
  title: z.string(),
});

/** A Zod schema to describe chapter categories */
export const zCategory = z.preprocess(
  (value) => (typeof value === 'string' ? value.toUpperCase() : value),
  union(CATEGORIES),
);

/** A Zod schema to describe chapter path crumbs */
export const zChapter = union(CATEGORIES.map((it) => it.toLowerCase()));

export const zChapterMatter = z.object({
  banner: z.string(),
  title: z.string(),
});

const zCard = z
  .tuple([z.number(), z.string()])
  .refine((_): _ is [quantity: number, name: string] => true);

const zDecklist = z.object({
  // NOTE Formerly `Decklist` type
  authors: z.string().nullable(),
  colors: z.string().array().nullable(),
  main: zCard.array().array(),
  mainCount: z.number(),
  side: zCard.array().array(),
  sideCount: z.number(),
  title: z.string().nullable(),
  // NOTE Formerly `DecklistExtra` type
  dateFromPath: z.string().nullable(),
  titleFromPath: z.string(),
});

const zScry = z.object({
  artist: z.string(),
  flavor: z.string().nullable(),
  images: z.object({
    art: z.string().nullable(),
    artPreview: z.string().nullable(),
    full: z.string().nullable(),
  }),
  name: z.string(),
  setCode: z.string(),
  setName: z.string(),
});

export const zMetadata = z.object({
  decklists: z.record(z.string(), zDecklist),
  scries: z.record(z.string(), zScry.array()),
});

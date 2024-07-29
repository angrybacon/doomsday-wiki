import { z } from 'zod';

import { type ArticleMatter, type ChapterMatter } from '@/tools/markdown/types';

type ReadMatter<TMatter> = (data: Record<string, unknown>) => TMatter;

export const readArticleMatter: ReadMatter<ArticleMatter> = (data) =>
  z
    .object({
      authors: z.string(),
      banner: z.string(),
      kind: z.union([
        // TODO Read values dynamically
        z.literal('ARTICLE'),
        z.literal('PRIMER'),
        z.literal('REPORT'),
      ]),
      tags: z.preprocess(
        (value) => (Array.isArray(value) ? value : [value]),
        z
          .union([
            // TODO Read values dynamically
            z.literal('DDEFT'),
            z.literal('DDFT'),
            z.literal('LEGACY'),
            z.literal('MEANDECK'),
            z.literal('VINTAGE'),
          ])
          .array(),
      ),
      title: z.string(),
    })
    .parse(data);

export const readChapterMatter: ReadMatter<ChapterMatter> = (data) =>
  z
    .object({
      banner: z.string(),
      order: z.number().nonnegative().optional(),
      title: z.string(),
    })
    .parse(data);

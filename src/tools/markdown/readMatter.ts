import { z } from 'zod';

import { Kind } from '@/tools/markdown/constants/Kind';
import { Tag } from '@/tools/markdown/constants/Tag';
import { type ArticleMatter, type ChapterMatter } from '@/tools/markdown/types';
import { union } from '@/tools/z/union';

type ReadMatter<TMatter> = (data: Record<string, unknown>) => TMatter;

export const readArticleMatter: ReadMatter<ArticleMatter> = (data) =>
  z
    .object({
      authors: z.string(),
      banner: z.string(),
      kind: union(Object.keys(Kind) as (keyof typeof Kind)[]),
      tags: z.preprocess(
        (value) => (Array.isArray(value) ? value : [value]),
        union(Object.keys(Tag) as (keyof typeof Tag)[]).array(),
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

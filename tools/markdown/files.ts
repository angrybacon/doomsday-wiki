import { join } from 'node:path';
import { makeCards, makeNextRoutes, walk } from '@korumite/kiwi/server';
import { z } from 'zod';

import { formatDate } from '@/tools/io/formatDate';
import { zCategory, zChapter } from '@/tools/z/schemas';

/** @deprecated Use `BASE_URLS.ROOT` instead */
const BASE_URL = join(process.cwd(), 'markdown');

/** Base file URLs for Markdown content */
export const BASE_URLS = {
  ARTICLES: join(BASE_URL, 'articles'),
  CHAPTERS: join(BASE_URL, 'chapters'),
  ROOT: BASE_URL,
} as const;

const ARTICLES_TREE = z
  .tuple([z.string(), z.string(), z.string(), z.string()])
  .refine((_): _ is [y: string, m: string, d: string, slug: string] => true)
  .array()
  .parse(walk(BASE_URLS.ARTICLES));

export const ARTICLES = {
  CARDS: (
    await makeCards(
      { paths: ARTICLES_TREE, root: BASE_URLS.ARTICLES },
      {
        banner: ({ matter }) => z.string().parse(matter.banner),
        date: ({ crumbs: [y, m, d] }) => formatDate(y, m, d),
        slug: ({ crumbs }) => z.string().parse(crumbs[3]),
      },
    )
  ).reverse(),
  ROUTES: makeNextRoutes(ARTICLES_TREE, ['year', 'month', 'day', 'slug']),
} as const;

const CHAPTERS_TREE = z
  .tuple([z.string(), z.string()])
  .refine((_): _ is [chapter: string, slug: string] => true)
  .array()
  .parse(walk(BASE_URLS.CHAPTERS));

export const CHAPTERS = {
  CARDS: await makeCards(
    { paths: CHAPTERS_TREE, root: BASE_URLS.CHAPTERS },
    {
      banner: ({ matter }) => z.string().parse(matter.banner),
      category: ({ crumbs }) => zCategory.parse(crumbs[0]),
      chapter: ({ crumbs }) => zChapter.parse(crumbs[0]),
      slug: ({ crumbs }) => z.string().parse(crumbs[1]),
    },
  ),
  ROUTES: makeNextRoutes(CHAPTERS_TREE, ['chapter', 'slug']),
} as const;

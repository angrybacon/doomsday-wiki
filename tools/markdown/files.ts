import { join } from 'node:path';
import { makeCards, makeNextRoutes, walk } from '@korumite/kiwi';
import * as z from 'zod';

import { formatDate } from '~/tools/io/formatDate';
import {
  CategorySchema,
  KindSchema,
  TagSchema,
} from '~/tools/markdown/schemas';

/** @deprecated Use `BASE_URLS.ROOT` instead */
const BASE_URL = join(process.cwd(), 'markdown');

/** Base file URLs for Markdown content */
export const BASE_URLS = {
  // oxlint-disable no-deprecated
  ARTICLES: join(BASE_URL, 'articles'),
  CHAPTERS: join(BASE_URL, 'chapters'),
  ROOT: BASE_URL,
  // oxlint-enable no-deprecated
} as const;

const ARTICLES_TREE = z
  .tuple([z.string(), z.string(), z.string(), z.string()])
  .refine((_): _ is [y: string, m: string, d: string, slug: string] => true)
  .array()
  .parse(walk(BASE_URLS.ARTICLES));

export const ARTICLES = {
  CARDS: (
    await makeCards(
      { paths: ARTICLES_TREE, prefix: '/articles', root: BASE_URLS.ARTICLES },
      {
        authors: ({ matter }) => z.string().parse(matter.authors),
        banner: ({ matter }) => z.string().parse(matter.banner),
        date: ({ crumbs: [y, m, d] }) => formatDate(y, m, d),
        kind: ({ matter }) => KindSchema.parse(matter.kind),
        slug: ({ crumbs }) => z.string().parse(crumbs[3]),
        tags: ({ matter }) => TagSchema.array().parse(matter.tags),
        title: ({ matter }) => z.string().parse(matter.title),
      },
    )
  ).toReversed(),
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
      category: ({ crumbs }) => CategorySchema.parse(crumbs[0]),
      slug: ({ crumbs }) => z.string().parse(crumbs[1]),
      title: ({ matter }) => z.string().parse(matter.title),
    },
  ),
  ROUTES: makeNextRoutes(CHAPTERS_TREE, ['chapter', 'slug']),
} as const;

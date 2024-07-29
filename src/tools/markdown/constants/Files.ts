import { join } from 'node:path';
import { makeNextRoutes, walk } from '@korumite/kiwi/server';
import { z } from 'zod';

/** @deprecated Use `BASE_URLS.ROOT` instead. */
const BASE_URL = join(process.cwd(), 'markdown');

/** Base file URLs for Markdown content categories. */
export const BASE_URLS = {
  ARTICLES: join(BASE_URL, 'articles'),
  CHAPTERS: join(BASE_URL, 'chapters'),
  ROOT: BASE_URL,
} as const;

const SCHEMAS = {
  ARTICLES: z
    .tuple([z.string(), z.string(), z.string(), z.string()])
    .refine((_): _ is [y: string, m: string, d: string, slug: string] => true)
    .array(),
  CHAPTERS: z
    .tuple([z.string(), z.string()])
    .refine((_): _ is [chapter: string, slug: string] => true)
    .array(),
} as const;

const ARTICLES_TREE = SCHEMAS.ARTICLES.parse(walk(BASE_URLS.ARTICLES));

export const ARTICLES = {
  ROUTES: makeNextRoutes(ARTICLES_TREE, ['year', 'month', 'day', 'article']),
  TREE: ARTICLES_TREE,
} as const;

const CHAPTERS_TREE = SCHEMAS.CHAPTERS.parse(walk(BASE_URLS.CHAPTERS));

export const CHAPTERS = {
  ROUTES: makeNextRoutes(CHAPTERS_TREE, ['category', 'chapter']),
  TREE: CHAPTERS_TREE,
} as const;

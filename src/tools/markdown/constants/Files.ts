import { join } from 'node:path';
import { makeNextRoutes, walk } from '@korumite/kiwi/server';

/** @deprecated Use `BASE_URLS.ROOT` instead. */
const BASE_URL = join(process.cwd(), 'markdown');

/** Base file URLs for Markdown content categories. */
export const BASE_URLS = {
  ARTICLES: join(BASE_URL, 'articles'),
  CHAPTERS: join(BASE_URL, 'chapters'),
  ROOT: BASE_URL,
} as const;

const ARTICLES_TREE = walk(BASE_URLS.ARTICLES);

export const ARTICLES = {
  ROUTES: makeNextRoutes(ARTICLES_TREE, ['year', 'month', 'day', 'article']),
  TREE: ARTICLES_TREE as [
    year: string,
    month: string,
    day: string,
    article: string,
  ][],
} as const;

const CHAPTERS_TREE = walk(BASE_URLS.CHAPTERS);

export const CHAPTERS = {
  ROUTES: makeNextRoutes(CHAPTERS_TREE, ['category', 'chapter']),
  TREE: CHAPTERS_TREE as [chapter: string, slug: string][],
} as const;

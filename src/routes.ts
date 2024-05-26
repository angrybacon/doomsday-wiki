import { join } from 'node:path';
import { makeNextRoutes, walk } from '@korumite/kiwi/server';

const BASE_URL = join(process.cwd(), 'markdown');

const BASE_URLS = {
  ARTICLES: join(BASE_URL, 'articles'),
  CHAPTERS: join(BASE_URL, 'chapters'),
};

export const ARTICLES = {
  ROUTES: makeNextRoutes(walk(BASE_URLS.ARTICLES), [
    'year',
    'month',
    'day',
    'article',
  ]),
} as const;

export const CHAPTERS = {
  ROUTES: makeNextRoutes(walk(BASE_URLS.CHAPTERS), ['category', 'chapter']),
} as const;

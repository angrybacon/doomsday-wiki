import { join } from 'node:path';

/** @deprecated Use `BASE_URLS.ROOT` instead. */
const BASE_URL = join(process.cwd(), 'markdown');

/** Base file URLs for Markdown content categories. */
export const BASE_URLS = {
  ARTICLES: join(BASE_URL, 'articles'),
  CHAPTERS: join(BASE_URL, 'chapters'),
  ROOT: BASE_URL,
} as const;

import { join } from 'node:path';

/** File extension to consider for Markdown content. */
export const MARKDOWN_EXTENSION = '.md';

/** Base file URL for Markdown content. */
export const BASE_URL = join(process.cwd(), 'markdown');

/** Base file URLs for Markdown content categories. */
export const BASE_URLS = {
  /** Base URL for articles. */
  ARTICLES: join(BASE_URL, 'articles'),
  /** Base URL for chapters. */
  CHAPTERS: join(BASE_URL, 'chapters'),
} as const;

import { join } from 'path';

/** File extension to consider for Markdown content. */
export const MARKDOWN_EXTENSION = '.md';

/** Base URL for Markdown content. */
export const BASE_MARKDOWN_URL = join(process.cwd(), 'markdown');

/** Base URLs for Markdown content. */
export const BASE_URLS = {
  /** Base URL for articles. */
  ARTICLE: join(BASE_MARKDOWN_URL, 'articles'),
  /** Base URL for chapters. */
  CHAPTER: join(BASE_MARKDOWN_URL, 'chapters'),
  /** Base URL for partials. */
  PARTIAL: join(BASE_MARKDOWN_URL, 'partials'),
} as const;

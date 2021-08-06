import { join } from 'path';

/** Base URL for Markdown content. */
export const BASE_MARKDOWN_URL = join(process.cwd(), 'markdown');

/** Base URL for articles. */
export const BASE_ARTICLE_URL = join(BASE_MARKDOWN_URL, 'articles');

/** File extension to consider for Markdown content. */
export const MARKDOWN_EXTENSION = '.mdx';

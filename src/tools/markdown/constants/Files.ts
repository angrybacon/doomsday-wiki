import { join } from 'path';

/** File extension to consider for Markdown content. */
export const MARKDOWN_EXTENSION = '.md';

/** Base URL for Markdown content. */
export const BASE_MARKDOWN_URL = join(process.cwd(), 'markdown');

/** Base URL for articles. */
export const BASE_ARTICLE_URL = join(BASE_MARKDOWN_URL, 'articles');

/** Base URL for chapters. */
export const BASE_CHAPTER_URL = join(BASE_MARKDOWN_URL, 'chapters');

/** Base URL for partials. */
export const BASE_PARTIALS_URL = join(BASE_MARKDOWN_URL, 'partials');

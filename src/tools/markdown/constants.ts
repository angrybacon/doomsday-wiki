import { join } from 'path';
import { mdiEye, mdiFileDocumentMultiple, mdiFlash, mdiFlask } from '@mdi/js';
import type { Chapter, ChapterMeta } from '@/tools/markdown/types';

/** Base URL for Markdown content. */
export const BASE_MARKDOWN_URL = join(process.cwd(), 'markdown');

/** Base URL for articles. */
export const BASE_ARTICLE_URL = join(BASE_MARKDOWN_URL, 'articles');

/**
 * Base URLs for chapters.
 *
 * Each pair represent a chapter key together with its corresponding root
 * directory. The key is used against `` to lookup metadata such as subtitle and
 * icons for the sidebar entry.
 * Order in the array matters.
 */
// prettier-ignore
export const BASE_CHAPTER_URLS: [Chapter, string][] = [
  ['meandeck',   'chapters.mdx/meandeck'],
  ['ddft',       'chapters.mdx/ddft'],
  ['ddeft',      'chapters.mdx/ddeft'],
  ['appendices', 'appendices.mdx'],
];

/** List the sidebar menu decorations such as title, subtitle and icon. */
export const MENU_DECORATIONS: Record<Chapter, ChapterMeta> = {
  meandeck: {
    icon: mdiEye,
    subtitle: 'Force of Will Doomsday',
    title: 'Meandeck',
  },
  ddft: {
    icon: mdiFlash,
    subtitle: 'Doomsday Fetchland Tendrils',
    title: 'DDFT',
  },
  ddeft: {
    icon: mdiFlask,
    subtitle: 'Experimental Frenzy',
    title: 'DDEFT',
  },
  appendices: {
    icon: mdiFileDocumentMultiple,
    subtitle: 'Other Resources',
    title: 'Appendices',
  },
};

/** File extension to consider for Markdown content. */
export const MARKDOWN_EXTENSION = '.mdx';

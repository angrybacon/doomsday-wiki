import { join } from 'path';
import { mdiEye, mdiFileDocumentMultiple, mdiFlash, mdiFlask } from '@mdi/js';
import type { Category, CategoryMeta } from '@/tools/markdown/types';

/** File extension to consider for Markdown content. */
export const MARKDOWN_EXTENSION = '.md';

/** Base URL for Markdown content. */
export const BASE_MARKDOWN_URL = join(process.cwd(), 'markdown');

/** Base URL for articles. */
export const BASE_ARTICLE_URL = join(BASE_MARKDOWN_URL, 'articles');

/** Base URL for chapters. */
export const BASE_CHAPTER_URL = join(BASE_MARKDOWN_URL, 'chapters');

/** Set order for the menu entries. */
export const MENU_ENTRIES: Category[] = [
  'meandeck',
  'ddft',
  'ddeft',
  'appendices',
];

/** List the sidebar menu decorations such as title and icon. */
export const MENU_DECORATIONS: Record<Category, CategoryMeta> = {
  appendices: {
    icon: mdiFileDocumentMultiple,
    subtitle: 'Other Resources',
    title: 'Appendices',
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
  meandeck: {
    icon: mdiEye,
    subtitle: 'Force of Will Doomsday',
    title: 'Meandeck',
  },
};

import { mdiEye, mdiFileDocumentMultiple, mdiFlash, mdiFlask } from '@mdi/js';
import type { Category, CategoryId } from '@/tools/markdown/types';

/** Set order for the menu entries. */
export const MENU_ENTRIES: CategoryId[] = [
  'meandeck',
  'ddft',
  'ddeft',
  'appendices',
];

/** List the sidebar menu decorations such as title and icon. */
export const MENU_DECORATIONS: Record<CategoryId, Category> = {
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

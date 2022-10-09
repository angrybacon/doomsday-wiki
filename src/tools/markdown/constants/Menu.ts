import {
  mdiEye,
  mdiFileDocumentMultiple,
  mdiFlash,
  mdiFlask,
  mdiSword,
} from '@mdi/js';
import { Category } from '@/tools/markdown/constants/Category';
import type { MenuDecoration } from '@/tools/markdown/types';

/**
 * List the menu entries and their corresponding decorations such as title and
 * icon. Order matters.
 */
export const DECORATIONS: MenuDecoration[] = [
  {
    category: Category.MEANDECK,
    icon: mdiEye,
    subtitle: 'Force of Will Doomsday',
    title: 'Doomsday',
  },
  {
    category: Category.DDFT,
    icon: mdiFlash,
    subtitle: 'Doomsday Fetchland Tendrils',
    title: 'DDFT',
  },
  {
    category: Category.DDEFT,
    icon: mdiFlask,
    subtitle: 'Experimental Frenzy',
    title: 'DDEFT',
  },
  {
    category: Category.TEMPO,
    icon: mdiSword,
    subtitle: 'Introducing the Combat Phase',
    title: 'Tempo',
  },
  {
    category: Category.APPENDICES,
    icon: mdiFileDocumentMultiple,
    subtitle: 'Other Resources',
    title: 'Appendices',
  },
];

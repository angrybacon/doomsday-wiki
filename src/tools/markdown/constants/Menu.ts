import { Category } from '@/tools/markdown/constants/Category';
import type { MenuDecoration } from '@/tools/markdown/types';

/** List the menu entries and their corresponding decorations in order. */
export const DECORATIONS: MenuDecoration[] = [
  {
    category: Category.MEANDECK,
    subtitle: 'Force of Will Doomsday',
    title: 'Doomsday',
  },
  {
    category: Category.DDFT,
    subtitle: 'Doomsday Fetchland Tendrils',
    title: 'DDFT',
  },
  {
    category: Category.DDEFT,
    subtitle: 'Experimental Frenzy',
    title: 'DDEFT',
  },
  {
    category: Category.APPENDICES,
    subtitle: 'Other Resources',
    title: 'Appendices',
  },
];

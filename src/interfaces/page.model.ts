import type { Decklists } from '@/tools/decklists/types';
import type { Menu, Partials } from '@/tools/markdown/types';

export interface ExtraPageProps {
  decklists: Decklists;
  menu: Menu;
  partials: Partials;
}

import { MENU_DECORATIONS, MENU_ENTRIES } from '@/tools/markdown/constants';
import { getChapters } from '@/tools/markdown/getChapters';
import type { Document, Menu } from '@/tools/markdown/types';

type GetMenu = () => Menu;

/**
 * Read file system and return a structured list of all chapters within
 * categories.
 */
export const getMenu: GetMenu = () => {
  const chapters: Document[] = getChapters();
  const menu = chapters.reduce<Record<string, Document[]>>(
    (accumulator, chapter) => {
      const [category] = chapter.crumbs;
      accumulator[category] = accumulator[category] || [];
      accumulator[category].push(chapter);
      return accumulator;
    },
    {}
  );
  return MENU_ENTRIES.map((category) => {
    const { icon, subtitle, title } = MENU_DECORATIONS[category];
    return { icon, subtitle, title, pages: menu[category] };
  });
};

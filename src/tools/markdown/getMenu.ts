import { DECORATIONS } from '@/tools/markdown/constants/Menu';
import { getChapters } from '@/tools/markdown/getChapters';
import type { Chapter, MenuEntry } from '@/tools/markdown/types';

type GetMenu = () => MenuEntry[];

/**
 * Read file system and return a structured list of all chapters within their
 * respective categories.
 */
export const getMenu: GetMenu = () => {
  const chapters: Chapter[] = getChapters();
  const menu = chapters.reduce<Record<string, Chapter[]>>(
    (accumulator, chapter) => {
      const [category] = chapter.crumbs;
      accumulator[category] = accumulator[category] || [];
      accumulator[category].push(chapter);
      return accumulator;
    },
    {}
  );
  return DECORATIONS.map(({ category, icon, subtitle, title }) => {
    const pages: Chapter[] = [...menu[category]];
    // NOTE Sort chapters by the `order` frontmatter, no support above 99
    pages.sort((left, right) => {
      const leftValue = left.matter.order ?? 99;
      const rightValue = right.matter.order ?? 99;
      return leftValue - rightValue;
    });
    return { category, icon, subtitle, title, pages };
  });
};

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
  return DECORATIONS.map(({ category, subtitle, title }) => {
    const pages = menu[category];
    if (!pages) {
      throw new Error(`Could not find pages under '${category}' menu`);
    }
    // NOTE Sort chapters by the `order` frontmatter, no support above 99
    pages.sort((a, b) => (a.matter.order ?? 99) - (b.matter.order ?? 99));
    return { category, subtitle, title, pages };
  });
};

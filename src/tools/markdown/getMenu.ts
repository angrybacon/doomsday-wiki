import { getChapterCards } from '@/tools/markdown/getChapterCards';
import {
  type ChapterCard,
  type MenuDecoration,
  type MenuEntry,
} from '@/tools/markdown/types';

/** List the menu entries and their corresponding decorations in order. */
const DECORATIONS: MenuDecoration[] = [
  {
    category: 'MEANDECK',
    subtitle: 'Force of Will Doomsday',
    title: 'Doomsday',
  },
  {
    category: 'DDFT',
    subtitle: 'Doomsday Fetchland Tendrils',
    title: 'DDFT',
  },
  {
    category: 'ENTOMBSDAY',
    subtitle: 'Tin Fins Hybrid',
    title: 'Entombsday',
  },
  {
    category: 'APPENDICES',
    subtitle: 'Other Resources',
    title: 'Appendices',
  },
];

/**
 * Read file system and return a structured list of all chapters within their
 * respective categories.
 */
const getMenu = async (): Promise<MenuEntry[]> => {
  const cards = await getChapterCards();
  const menu = cards.reduce<
    Partial<Record<ChapterCard['category'], ChapterCard[]>>
  >((accumulator, card) => {
    const { category } = card;
    accumulator[category] = accumulator[category] || [];
    accumulator[category].push(card);
    return accumulator;
  }, {});
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

/** A structured list of all chapters within their respective categories. */
export const MENU = await getMenu();

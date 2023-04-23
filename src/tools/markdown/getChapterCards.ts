import { join } from 'path';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { walk } from '@/tools/io/walk';
import { Category } from '@/tools/markdown/constants/Category';
import {
  BASE_CHAPTER_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { readChapterMatter } from '@/tools/markdown/readMatter';
import type { ChapterCard, ChapterMatter } from '@/tools/markdown/types';

// TODO Can missing authors prevent build?

/** Read file system and return a list of all chapters. */
export const getChapterCards = (): ChapterCard[] => {
  const depth = 2;
  const extension = MARKDOWN_EXTENSION;
  const files = walk(BASE_CHAPTER_URL, { depth, extension });
  const cards = files.reduce<ChapterCard[]>((accumulator, crumbs) => {
    const path = join(...crumbs);
    // NOTE Only consider complete paths ie. [category, chapter]
    if (crumbs.length !== depth) {
      throw new Error(`Orphan chapter found at "${path}"`);
    }
    const category = crumbs[0] as Category;
    const slug = crumbs[1];
    if (!Object.values(Category).includes(category)) {
      throw new Error(`Unknown chapter category "${category}"`);
    }
    let matter: ChapterMatter;
    try {
      const { data } = readMarkdown(join(BASE_CHAPTER_URL, path) + extension);
      matter = readChapterMatter(data);
    } catch (error) {
      const message = error instanceof Error ? error.message : `${error}`;
      throw new Error(`${message} in "${path}"`);
    }
    const card: ChapterCard = {
      category,
      matter,
      route: ['', ...crumbs].join('/'),
      slug,
    };
    return [...accumulator, card];
  }, []);
  return cards;
};

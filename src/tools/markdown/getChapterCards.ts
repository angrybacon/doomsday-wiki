import { join } from 'path';

import { readMarkdown } from '@/tools/io/readMarkdown';
import { walk } from '@/tools/io/walk';
import {
  BASE_URLS,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { readChapterMatter } from '@/tools/markdown/readMatter';
import { type ChapterCard, type ChapterMatter } from '@/tools/markdown/types';
import { assertCategory, assertDepth } from '@/tools/markdown/utilities';

// TODO Can missing authors prevent build?

/** Read file system and return a list of all chapters. */
export const getChapterCards = (): ChapterCard[] => {
  const depth = 2;
  const extension = MARKDOWN_EXTENSION;
  const files = walk(BASE_URLS.CHAPTER, { depth, extension });
  const cards = files.reduce<ChapterCard[]>((accumulator, crumbs) => {
    const path = join(...crumbs) + extension;
    // NOTE Only consider complete paths ie. [category, chapter]
    assertDepth(crumbs, depth);
    const [category, slug] = crumbs;
    assertCategory(category);
    let matter: ChapterMatter;
    try {
      const { data } = readMarkdown(join(BASE_URLS.CHAPTER, path));
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

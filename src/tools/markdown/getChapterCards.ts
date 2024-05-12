import { join } from 'node:path';
import { read, walk } from '@korumite/kiwi/server';

import {
  BASE_URLS,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { readChapterMatter } from '@/tools/markdown/readMatter';
import { type ChapterCard, type ChapterMatter } from '@/tools/markdown/types';
import { assertCategory, assertDepth } from '@/tools/markdown/utilities';

/** Read file system and return a list of all chapters. */
export const getChapterCards = (): ChapterCard[] => {
  const extension = MARKDOWN_EXTENSION;
  const files = walk(BASE_URLS.CHAPTER, { extension });
  const cards = files.reduce<ChapterCard[]>((accumulator, crumbs) => {
    assertDepth(crumbs, 2);
    const [category, slug] = crumbs;
    assertCategory(category);
    const path = join(...crumbs) + extension;
    let matter: ChapterMatter;
    try {
      matter = readChapterMatter(read(BASE_URLS.CHAPTER, path).matter);
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

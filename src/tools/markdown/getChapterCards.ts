import { join } from 'node:path';
import { read } from '@korumite/kiwi/server';
import { z } from 'zod';

import { CATEGORIES } from '@/tools/markdown/constants';
import { BASE_URLS, CHAPTERS } from '@/tools/markdown/files';
import { readChapterMatter } from '@/tools/markdown/readMatter';
import { type ChapterCard, type ChapterMatter } from '@/tools/markdown/types';
import { union } from '@/tools/z/union';

const MARKDOWN_EXTENSION = '.md';

/** Read file system and return a list of all chapters. */
export const getChapterCards = (): Promise<ChapterCard[]> =>
  CHAPTERS.TREE.reduce<Promise<ChapterCard[]>>(async (accumulator, crumbs) => {
    const category = z
      .preprocess(
        (value) => (typeof value === 'string' ? value.toUpperCase() : value),
        union(CATEGORIES),
      )
      .parse(crumbs[0]);
    const path = join(...crumbs) + MARKDOWN_EXTENSION;
    const markdown = await read([BASE_URLS.CHAPTERS, path]);
    let matter: ChapterMatter;
    try {
      matter = readChapterMatter(markdown.matter);
    } catch (error) {
      const message = error instanceof Error ? error.message : `${error}`;
      throw new Error(`${message} in "${path}"`);
    }
    const card: ChapterCard = {
      category,
      matter,
      route: ['', ...crumbs].join('/'),
      slug: crumbs[1],
    };
    return [...(await accumulator), card];
  }, Promise.resolve([]));

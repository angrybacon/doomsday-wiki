import { join } from 'path';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { walk } from '@/tools/io/walk';
import { Category } from '@/tools/markdown/constants/Category';
import {
  BASE_CHAPTER_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { sanitizeTitle } from '@/tools/markdown/sanitize';
import type { Chapter, Matter } from '@/tools/markdown/types';

type GetChapters = () => Chapter[];

/** Read file system and return a list of all chapters. */
export const getChapters: GetChapters = () => {
  const depth = 2;
  const extension = MARKDOWN_EXTENSION;
  const files = walk(BASE_CHAPTER_URL, { depth, extension });
  const documents = files.reduce<Chapter[]>((accumulator, crumbs) => {
    const path = join(BASE_CHAPTER_URL, ...crumbs) + extension;
    // NOTE Only consider complete paths ie. [category, chapter]
    if (crumbs.length === depth) {
      const category = crumbs[0] as Category;
      const slug = crumbs[1];
      if (!Object.values(Category).includes(category as Category)) {
        throw new Error(`Unknown chapter category "${category}"`);
      }
      const { data } = readMarkdown(path);
      data.title = sanitizeTitle(data.title, path);
      const matter = { ...data } as Matter;
      const route = ['', ...crumbs].join('/');
      return [...accumulator, { category, crumbs, matter, route, slug }];
    }
    throw new Error(`Orphan file found at "${path}"`);
  }, []);
  return documents;
};

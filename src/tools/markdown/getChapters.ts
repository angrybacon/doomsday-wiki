import { join } from 'path';
import {
  BASE_CHAPTER_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';
import { read } from '@/tools/markdown/read';
import type { Document } from '@/tools/markdown/types';
import { walk } from '@/tools/markdown/walk';

type GetChapters = () => Document[];

/** Read file system and return a list of all chapters. */
export const getChapters: GetChapters = () => {
  const files = Array.from(walk(BASE_CHAPTER_URL, { depth: 2 }));
  const documents = files.reduce<Document[]>((accumulator, crumbs) => {
    // NOTE Only consider complete paths ie. [category, chapter]
    if (crumbs.length === 2) {
      const path = join(BASE_CHAPTER_URL, ...crumbs) + MARKDOWN_EXTENSION;
      const { data } = read(path);
      const route = ['', ...crumbs].join('/');
      return [...accumulator, { crumbs, data, route }];
    }
    return accumulator;
  }, []);
  return documents;
};

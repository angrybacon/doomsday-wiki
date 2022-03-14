import { join } from 'path';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { walk } from '@/tools/io/walk';
import {
  BASE_CHAPTER_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { sanitizeTitle } from '@/tools/markdown/sanitize';
import type { Document, Matter } from '@/tools/markdown/types';

type GetChapters = () => Document[];

/** Read file system and return a list of all chapters. */
export const getChapters: GetChapters = () => {
  const files = Array.from(walk(BASE_CHAPTER_URL, { depth: 2 }));
  const documents = files.reduce<Document[]>((accumulator, crumbs) => {
    // TODO Warn against orphan files
    // NOTE Only consider complete paths ie. [category, chapter]
    if (crumbs.length === 2) {
      const path = join(BASE_CHAPTER_URL, ...crumbs) + MARKDOWN_EXTENSION;
      const { data } = readMarkdown(path);
      data.title = sanitizeTitle(data.title, path);
      const matter = { ...data } as Matter;
      const route = ['', ...crumbs].join('/');
      return [...accumulator, { crumbs, matter, route, slug: crumbs[1] }];
    }
    return accumulator;
  }, []);
  return documents;
};

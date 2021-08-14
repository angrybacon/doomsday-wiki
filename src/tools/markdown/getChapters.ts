import { join } from 'path';
import {
  BASE_CHAPTER_URLS,
  BASE_MARKDOWN_URL,
  MARKDOWN_EXTENSION,
  MENU_DECORATIONS,
} from '@/tools/markdown/constants';
import { read } from '@/tools/markdown/read';
import type { ChapterEntry, ChapterPage } from '@/tools/markdown/types';
import { walk } from '@/tools/markdown/walk';

type GetChapters = () => ChapterEntry[];

/** Read file system and return a structured list of all chapters and pages. */
export const getChapters: GetChapters = () => {
  const chapters = BASE_CHAPTER_URLS.map(([key, root]) => {
    const directory = join(BASE_MARKDOWN_URL, root);
    const files = Array.from(walk(directory, { depth: 1 }));
    const pages = files.reduce<ChapterPage[]>((accumulator, segments) => {
      const [slug] = segments;
      const path = join(directory, slug) + MARKDOWN_EXTENSION;
      const { data } = read(path);
      return [...accumulator, { route: `/${key}/${slug}`, title: data.title }];
    }, []);
    const { icon, subtitle, title } = MENU_DECORATIONS[key];
    return { icon, pages, subtitle, title };
  });
  return chapters;
};

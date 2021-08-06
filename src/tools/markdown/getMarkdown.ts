import { readFileSync } from 'fs';
import { join } from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { Markdown } from '@/tools/markdown/types';
import {
  BASE_MARKDOWN_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';

type GetMarkdown = (...slugs: string[]) => Markdown;

/** Read file system and return Markdown matter from the specified slug. */
export const getMarkdown: GetMarkdown = (...slugs) => {
  const path: string = join(BASE_MARKDOWN_URL, ...slugs) + MARKDOWN_EXTENSION;
  const buffer: string = readFileSync(path, 'utf8');
  const { content, data }: GrayMatterFile<string> = matter(buffer);
  return { content, data };
};

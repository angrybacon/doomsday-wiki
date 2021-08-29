import { join } from 'path';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { Markdown } from '@/tools/markdown/types';
import {
  BASE_MARKDOWN_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';

type GetMarkdown = (...slugs: string[]) => Markdown;

/** Read file system and return Markdown matter from the specified slug. */
export const getMarkdown: GetMarkdown = (...slugs) => {
  const path = join(BASE_MARKDOWN_URL, ...slugs) + MARKDOWN_EXTENSION;
  const { content, data } = readMarkdown(path);
  return { content, data };
};

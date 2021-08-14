import { join } from 'path';
import { Markdown } from '@/tools/markdown/types';
import {
  BASE_MARKDOWN_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';
import { read } from '@/tools/markdown/read';

type GetMarkdown = (...slugs: string[]) => Markdown;

/** Read file system and return Markdown matter from the specified slug. */
export const getMarkdown: GetMarkdown = (...slugs) => {
  const path = join(BASE_MARKDOWN_URL, ...slugs) + MARKDOWN_EXTENSION;
  const { content, data } = read(path);
  return { content, data };
};

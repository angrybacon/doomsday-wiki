import { join } from 'path';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { toDirective } from '@/tools/mana/toDirective';
import { Markdown } from '@/tools/markdown/types';
import {
  BASE_MARKDOWN_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';
import { remarkScryfall } from '@/tools/remark/remarkScryfall';
import type { Scries } from '@/tools/scryfall/types';

/** Parse buffer as Markdown text and return Scry data from directives. */
const getScries = async (buffer: string): Promise<Scries> => {
  const tree = unified().use(remarkParse).use(remarkDirective).parse(buffer);
  return unified().use(remarkScryfall).run(tree) as unknown as Scries;
};

type GetMarkdown = (path: string, root?: string) => Promise<Markdown>;

/**
 * Read file system and return Markdown matter from the specified path.
 * Provided path should be relative to `BASE_MARKDOWN_URL` but can be specified.
 * Augment the result with Scryfall data found in the Markdown content.
 */
export const getMarkdown: GetMarkdown = async (
  path,
  root = BASE_MARKDOWN_URL
) => {
  const absolutePath = join(root, path) + MARKDOWN_EXTENSION;
  const { content: text, data: matter } = readMarkdown(absolutePath);
  const scries = await getScries(text);
  return { matter, scries, text: toDirective(text) };
};

import { join } from 'path';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { Markdown } from '@/tools/markdown/types';
import type { ScryData } from '@/tools/scryfall/types';
import { remarkScryfall } from '@/components/Remark/plugins/remarkScryfall';
import {
  BASE_MARKDOWN_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants';

type GetMarkdown = (...slugs: string[]) => Promise<Markdown>;

/** Read file system and return Markdown matter from the specified slug. */
export const getMarkdown: GetMarkdown = async (...slugs) => {
  const path = join(BASE_MARKDOWN_URL, ...slugs) + MARKDOWN_EXTENSION;
  const { content: text, data: matter } = readMarkdown(path);
  const tree = unified().use(remarkParse).use(remarkDirective).parse(text);
  const scries = (await unified()
    .use(remarkScryfall)
    .run(tree)) as unknown as Record<string, ScryData>;
  return { matter, scries, text };
};

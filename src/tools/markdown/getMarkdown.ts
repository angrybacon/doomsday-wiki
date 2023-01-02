import type { Root } from 'mdast';
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
} from '@/tools/markdown/constants/Files';
import { getBanner } from '@/tools/markdown/getBanner';
import { remarkScryfall } from '@/tools/remark/remarkScryfall';
import type { Scries } from '@/tools/scryfall/types';

type GetScries = (buffer: string) => Promise<Scries>;

/** Parse buffer as Markdown text and return Scry data from directives. */
const getScries: GetScries = async (buffer) => {
  const tree: Root = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .parse(buffer);
  const scries = await unified().use(remarkScryfall).run(tree);
  return scries as unknown as Scries;
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
  const { content, data } = readMarkdown(absolutePath);
  const scries: Scries = await getScries(content);
  const matter = data;
  if (matter.banner) {
    matter.bannerData = await getBanner(matter.banner);
  }
  return { matter, scries, text: toDirective(content) };
};

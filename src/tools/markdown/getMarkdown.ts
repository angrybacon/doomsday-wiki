import type { GrayMatterFile } from 'gray-matter';
import type { Root } from 'mdast';
import { join } from 'path';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { toDirective } from '@/tools/mana/toDirective';
import {
  BASE_MARKDOWN_URL,
  BASE_PARTIALS_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { getBanner } from '@/tools/markdown/getBanner';
import type { Markdown, Partials } from '@/tools/markdown/types';
import { remarkPartials } from '@/tools/remark/remarkPartials';
import { remarkScries } from '@/tools/remark/remarkScries';
import type { Scries } from '@/tools/scryfall/types';

/** Parse buffer as Markdown text and return all partials necessary for it. */
const makePartials = async (tree: Root): Promise<Partials> => {
  const partials = await unified()
    // NOTE Provide the getter as a callback to avoid circular imports
    .use(remarkPartials, getMarkdownPartial)
    .run(tree);
  return partials as unknown as Partials;
};

/** Parse buffer as Markdown text and return Scry data from directives. */
const makeScries = async (tree: Root): Promise<Scries> => {
  const scries = await unified().use(remarkScries).run(tree);
  return scries as unknown as Scries;
};

/** Forge a `unified` tree ready to be parsed by remarkers. */
const makeTree = (buffer: string): Root =>
  unified().use(remarkParse).use(remarkDirective).parse(buffer);

type GetMarkdown = (options: {
  path: string;
  root?: string;
}) => Promise<Markdown>;

/**
 * Read file system and return Markdown matter from the specified path.
 * Provided path should be relative to `BASE_MARKDOWN_URL` but can be specified.
 * Augment the result with Scryfall data found in the Markdown content.
 */
export const getMarkdown: GetMarkdown = async (options) => {
  const { path, root = BASE_MARKDOWN_URL } = options;
  const absolutePath = join(root, path) + MARKDOWN_EXTENSION;
  const markdown: GrayMatterFile<string> = readMarkdown(absolutePath);
  const { content, data: matter } = markdown;
  const tree: Root = makeTree(content);
  try {
    const scries: Scries = await makeScries(tree);
    const partials: Partials = await makePartials(tree);
    if (matter.banner) {
      matter.bannerData = await getBanner(matter.banner);
    }
    return { matter, partials, scries, text: toDirective(content) };
  } catch (error) {
    let message = `${error}`;
    if (error instanceof Error) message = error.message;
    throw new Error(`Failed retrieving markdown "${path}". ${message}`);
  }
};

export type GetMarkdownPartial = (options: {
  path: string;
}) => Promise<Markdown>;

/** Read Mardown content under the provided `path`. */
export const getMarkdownPartial: GetMarkdownPartial = async ({ path }) =>
  getMarkdown({ path, root: BASE_PARTIALS_URL });

import { join } from 'path';
import readingTime from 'reading-time';
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
import {
  readArticleMatter,
  readChapterMatter,
} from '@/tools/markdown/readMatter';
import type {
  Article,
  Chapter,
  Partial,
  Partials,
} from '@/tools/markdown/types';
import { remarkPartials } from '@/tools/remark/remarkPartials';
import { remarkScries } from '@/tools/remark/remarkScries';
import type { Scries } from '@/tools/scryfall/types';

/**
 * Read file system and return Markdown content with its matter for the
 * specified path. Provided path should be relative to `BASE_MARKDOWN_URL` but
 * the root can be specified.
 */
const getMarkdown = async (
  path: string,
  root: string = BASE_MARKDOWN_URL,
): Promise<{ base: Partial; extra: Record<string, unknown> }> => {
  const { content, data } = readMarkdown(join(root, path) + MARKDOWN_EXTENSION);
  const tree = unified().use(remarkParse).use(remarkDirective).parse(content);
  const base: Partial = {
    partials: (await unified()
      // NOTE Provide the getter as a callback to avoid circular imports
      .use(remarkPartials, getPartial)
      .run(tree)) as unknown as Partials,
    scries: (await unified().use(remarkScries).run(tree)) as unknown as Scries,
    text: toDirective(content),
  };
  return { base, extra: data };
};

/**
 * Read Mardown content under the provided `path` and augment with it article
 * metadata.
 */
export const getArticle = async (path: string): Promise<Article> => {
  try {
    const { base, extra } = await getMarkdown(join('articles', path));
    const matter = readArticleMatter(extra);
    return {
      ...base,
      banner: await getBanner(matter.banner),
      matter,
      minutes: readingTime(base.text).minutes,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

/**
 * Read Mardown content under the provided `path` and augment it with chapter
 * metadata.
 */
export const getChapter = async (path: string): Promise<Chapter> => {
  try {
    const { base, extra } = await getMarkdown(join('chapters', path));
    const matter = readChapterMatter(extra);
    return {
      ...base,
      banner: await getBanner(matter.banner),
      matter,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

/** Read Mardown content under the provided `path`. */
export const getPartial = async (path: string): Promise<Partial> => {
  try {
    const { base } = await getMarkdown(path, BASE_PARTIALS_URL);
    return base;
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

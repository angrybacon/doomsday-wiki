import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';

import { type Decklists } from '@/tools/decklists/types';
import { BASE_URL } from '@/tools/markdown/constants/Files';
import { getBanner } from '@/tools/markdown/getBanner';
import {
  readArticleMatter,
  readChapterMatter,
} from '@/tools/markdown/readMatter';
import {
  type Article,
  type Chapter,
  type Partial,
} from '@/tools/markdown/types';
import { remarkDecklists } from '@/tools/remark/remarkDecklists.server';
import { remarkMatter } from '@/tools/remark/remarkFrontmatter.server';
import { remarkMana } from '@/tools/remark/remarkMana.server';
import { remarkMinutes } from '@/tools/remark/remarkMinutes.server';
import { remarkScries } from '@/tools/remark/remarkScries.server';
import { type Scries } from '@/tools/scryfall/types';

/**
 * Read the Markdown content found at the provided path crumbs.
 * This does not handle the file extension and it has to be provided in the last
 * crumb. The path is relative to the root of the project.
 */
export const getMarkdown = async (...crumbs: string[]): Promise<Partial> => {
  const path = join(...crumbs);
  const buffer = readFileSync(join(BASE_URL, path));
  try {
    const { data, value } = await unified()
      .use(remarkDecklists)
      .use(remarkDirective)
      .use(remarkFrontmatter)
      .use(remarkMana)
      .use(remarkMatter)
      .use(remarkMinutes)
      .use(remarkParse)
      .use(remarkScries)
      .use(remarkStringify)
      .process(buffer);
    return {
      decklists: data.decklists as Decklists,
      matter: data.matter as Record<string, unknown>,
      minutes: data.minutes as number,
      scries: data.scries as Scries,
      text: String(value),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

/** Convenience helper to read an article. See `getMarkdown`. */
export const getArticle = async (
  ...crumbs: [year: string, month: string, day: string, article: string]
): Promise<Article> => {
  const path = join('articles', ...crumbs) + '.md';
  const markdown = await getMarkdown(path);
  try {
    const matter = readArticleMatter(markdown.matter);
    const banner = await getBanner(matter.banner);
    return { ...markdown, banner, matter };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

/** Convenience helper to read a chapter. See `getMarkdown`. */
export const getChapter = async (
  ...crumbs: [category: string, chapter: string]
): Promise<Chapter> => {
  const path = join('chapters', ...crumbs) + '.md';
  const markdown = await getMarkdown(path);
  try {
    const matter = readChapterMatter(markdown.matter);
    const banner = await getBanner(matter.banner);
    return { ...markdown, banner, matter };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

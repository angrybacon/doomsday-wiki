import { readFileSync } from 'node:fs';
import { join } from 'path';
import readingTime from 'reading-time';
import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';

import { BASE_URLS } from '@/tools/markdown/constants/Files';
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
import { remarkMana } from '@/tools/remark/remarkMana.server';
import { remarkScries } from '@/tools/remark/remarkScries.server';
import { type Scries } from '@/tools/scryfall/types';
import { remarkMatter } from '../remark/remarkFrontmatter.server';

const getMarkdown = async (path: string): Promise<Partial> => {
  const buffer = readFileSync(path + '.md');
  try {
    const { data, value } = await unified()
      .use(remarkDirective)
      .use(remarkFrontmatter)
      .use(remarkMana)
      .use(remarkMatter)
      .use(remarkParse)
      .use(remarkScries)
      .use(remarkStringify)
      .process(buffer);
    return {
      matter: data.matter as Record<string, unknown>,
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
  const path = join(BASE_URLS.ARTICLE, ...crumbs);
  const markdown = await getMarkdown(path);
  try {
    const matter = readArticleMatter(markdown.matter);
    const banner = await getBanner(matter.banner);
    const minutes = readingTime(markdown.text).minutes;
    return { ...markdown, banner, matter, minutes };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

/** Convenience helper to read a chapter. See `getMarkdown`. */
export const getChapter = async (
  ...crumbs: [category: string, chapter: string]
): Promise<Chapter> => {
  const path = join(BASE_URLS.CHAPTER, ...crumbs);
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

/** Convenience helper to read a partial. See `getMarkdown`. */
export const getPartial = (path: string): Promise<Partial> =>
  getMarkdown(join(BASE_URLS.PARTIAL, path));

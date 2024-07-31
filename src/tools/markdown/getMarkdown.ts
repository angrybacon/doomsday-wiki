import { join } from 'node:path';
import { read } from '@korumite/kiwi/server';

import { type Decklists } from '@/tools/decklists/types';
import { BASE_URLS } from '@/tools/markdown/files';
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
import { remarkMana } from '@/tools/remark/remarkMana.server';
import { remarkScries } from '@/tools/remark/remarkScries.server';
import { type Scries } from '@/tools/scryfall/types';

/** Convenience helper to read an article. See `getMarkdown`. */
export const getArticle = async (
  ...crumbs: [year: string, month: string, day: string, article: string]
): Promise<Article> => {
  const path = join('articles', ...crumbs);
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
  const path = join('chapters', ...crumbs);
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

/**
 * Read the Markdown content found at the provided path crumbs.
 * This handles the Markdown file extension so it should not be provided in the
 * last crumb.
 * The path is relative to the root of the project.
 */
export const getMarkdown = async (...crumbs: string[]): Promise<Partial> => {
  const path = join(...crumbs) + '.md';
  try {
    const { data, ...rest } = await read(
      [BASE_URLS.ROOT, path],
      remarkDecklists,
      remarkMana,
      remarkScries,
    );
    if (!data.decklists) throw new Error('Missing decklists');
    if (!data.scries) throw new Error('Missing scries');
    return {
      decklists: data.decklists as Decklists,
      scries: data.scries as Scries,
      ...rest,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} in "${path}"`);
  }
};

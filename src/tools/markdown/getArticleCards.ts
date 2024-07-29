import { join } from 'node:path';
import { read } from '@korumite/kiwi/server';

import { formatDate } from '@/tools/io/formatDate';
import { ARTICLES, BASE_URLS } from '@/tools/markdown/constants/Files';
import { getBanner } from '@/tools/markdown/getBanner';
import { readArticleMatter } from '@/tools/markdown/readMatter';
import {
  type ArticleCard,
  type ArticleMatter,
  type Banner,
} from '@/tools/markdown/types';
import { assertDepth } from '@/tools/markdown/utilities';

const MARKDOWN_EXTENSION = '.md';

/** Represent an article card for which the banner hasn't resolved yet. */
type ArticleCardPending = Omit<ArticleCard, 'banner'> &
  Partial<Pick<ArticleCard, 'banner'>>;

/** Read file system and return a list of all articles. */
export const getArticleCards = async (): Promise<ArticleCard[]> => {
  /** Warmup array for banner promises. */
  const banners: Promise<Banner>[] = [];
  // NOTE Reduce rightwards to sort descending
  const cards = ARTICLES.TREE.reduceRight<Promise<ArticleCardPending[]>>(
    async (accumulator, crumbs) => {
      assertDepth(crumbs, 4);
      const [year, month, day, slug] = crumbs;
      const path = join(...crumbs) + MARKDOWN_EXTENSION;
      const markdown = await read([BASE_URLS.ARTICLES, path]);
      let matter: ArticleMatter;
      try {
        matter = readArticleMatter(markdown.matter);
      } catch (error) {
        const message = error instanceof Error ? error.message : `${error}`;
        throw new Error(`${message} in "${path}"`);
      }
      const card: ArticleCardPending = {
        date: formatDate(year, month, day),
        day,
        matter,
        month,
        route: ['/articles', ...crumbs].join('/'),
        slug,
        year,
      };
      banners.push(
        getBanner(matter.banner).then(
          (banner) => (card.banner = banner),
          (error) => {
            const message = `Failed to scry banner "${matter.banner}" (${error})`;
            throw new Error(message);
          },
        ),
      );
      return [...(await accumulator), card];
    },
    Promise.resolve([]),
  );
  await Promise.all(banners);
  return cards as Promise<ArticleCard[]>;
};

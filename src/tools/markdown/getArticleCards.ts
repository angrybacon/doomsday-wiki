import { join } from 'node:path';
import { read, walk } from '@korumite/kiwi/server';

import { formatDate } from '@/tools/io/formatDate';
import {
  BASE_URLS,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { getBanner } from '@/tools/markdown/getBanner';
import { readArticleMatter } from '@/tools/markdown/readMatter';
import {
  type ArticleCard,
  type ArticleMatter,
  type Banner,
} from '@/tools/markdown/types';
import { assertDepth } from '@/tools/markdown/utilities';

/** Represent an article card for which the banner hasn't resolved yet. */
type ArticleCardPending = Omit<ArticleCard, 'banner'> &
  Partial<Pick<ArticleCard, 'banner'>>;

/** Read file system and return a list of all articles. */
export const getArticleCards = async (): Promise<ArticleCard[]> => {
  const extension = MARKDOWN_EXTENSION;
  const files = walk(BASE_URLS.ARTICLE, { extension });
  /** Warmup array for banner promises. */
  const banners: Promise<Banner>[] = [];
  // NOTE Reduce rightwards to sort descending
  const cards = files.reduceRight<ArticleCardPending[]>(
    (accumulator, crumbs) => {
      assertDepth(crumbs, 4);
      const [year, month, day, slug] = crumbs;
      const path = join(...crumbs) + extension;
      let matter: ArticleMatter;
      try {
        matter = readArticleMatter(read(BASE_URLS.ARTICLE, path).matter);
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
      return [...accumulator, card];
    },
    [],
  );
  await Promise.all(banners);
  return cards as ArticleCard[];
};

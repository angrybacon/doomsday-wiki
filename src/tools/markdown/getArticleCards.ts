import { join } from 'path';
import { readMarkdown } from '@/tools/io/readMarkdown';
import { formatDate } from '@/tools/io/formatDate';
import { walk } from '@/tools/io/walk';
import {
  BASE_ARTICLE_URL,
  MARKDOWN_EXTENSION,
} from '@/tools/markdown/constants/Files';
import { getBanner } from '@/tools/markdown/getBanner';
import { readArticleMatter } from '@/tools/markdown/readMatter';
import type {
  Banner,
  ArticleCard,
  ArticleMatter,
} from '@/tools/markdown/types';

/** Represent an article card for which the banner hasn't resolved yet. */
type ArticleCardPending = Omit<ArticleCard, 'banner'> &
  Partial<Pick<ArticleCard, 'banner'>>;

/** Read file system and return a list of all articles. */
export const getArticleCards = async (): Promise<ArticleCard[]> => {
  const depth = 4;
  const extension = MARKDOWN_EXTENSION;
  const files = walk(BASE_ARTICLE_URL, { depth, extension });
  /** Warmup array for banner promises. */
  const banners: Promise<Banner>[] = [];
  // NOTE Reduce rightwards to sort descending
  const cards = files.reduceRight<ArticleCardPending[]>(
    (accumulator, crumbs) => {
      const path = join(...crumbs);
      // NOTE Only consider complete paths ie. [year, month, day, slug]
      if (crumbs.length !== depth) {
        throw new Error(`Orphan article found at "${path}"`);
      }
      let matter: ArticleMatter;
      try {
        const { data } = readMarkdown(join(BASE_ARTICLE_URL, path) + extension);
        matter = readArticleMatter(data);
      } catch (error) {
        const message = error instanceof Error ? error.message : `${error}`;
        throw new Error(`${message} in "${path}"`);
      }
      const [year, month, day, slug] = crumbs;
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
          (banner) => {
            card.banner = banner;
            return banner;
          },
          (error) => {
            const message = `Failed to scry banner "${matter.banner}" (${error})`;
            throw new Error(message);
          }
        )
      );
      return [...accumulator, card];
    },
    []
  );
  await Promise.all(banners);
  return cards as ArticleCard[];
};

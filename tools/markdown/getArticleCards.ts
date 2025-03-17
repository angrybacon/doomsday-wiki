import { read } from '@korumite/kiwi/server';

import { ARTICLES } from '@/tools/markdown/files';
import { getBanner } from '@/tools/markdown/getBanner';
import { type ArticleCard } from '@/tools/markdown/types';
import { zArticleMatter } from '@/tools/z/schemas';

/** Read file system and return a list of all articles */
export const getArticleCards = async (): Promise<ArticleCard[]> =>
  Promise.all(
    ARTICLES.CARDS.map(async (card) => {
      const markdown = await read([card.path]);
      const matter = zArticleMatter.parse(markdown.matter);
      return {
        banner: await getBanner(matter.banner),
        date: card.date,
        href: '/articles' + card.href,
        matter,
      };
    }),
  );

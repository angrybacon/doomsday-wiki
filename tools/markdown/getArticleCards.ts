import { ARTICLES } from '@/tools/markdown/files';
import { getBanner } from '@/tools/markdown/getBanner';

/** Read file system and return a list of all articles */
export const getArticleCards = async () =>
  Promise.all(
    ARTICLES.CARDS.map(async (card) => ({
      ...card,
      banner: await getBanner(card.banner),
    })),
  );

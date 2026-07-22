import { cache } from 'react';

import { ARTICLES } from '~/tools/markdown/files';
import { getBanner } from '~/tools/markdown/getBanner';

/** Read file system and return a list of all articles */
export const getArticleCards = cache(() =>
  Promise.all(
    // oxlint-disable-next-line oxc/no-map-spread
    ARTICLES.CARDS.map(async ({ banner, ...card }) => ({
      ...card,
      banner: await getBanner(banner),
    })),
  ),
);

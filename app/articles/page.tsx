import type { Metadata } from 'next';

import { Articles } from '~/app/articles/Articles';
import { getArticleCards } from '~/tools/markdown/getArticleCards';

export const metadata: Metadata = {
  title: 'Articles',
};

export default async () => {
  const articles = await getArticleCards();
  return <Articles articles={articles} />;
};

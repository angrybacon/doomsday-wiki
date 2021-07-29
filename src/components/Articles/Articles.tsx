import React, { FunctionComponent } from 'react';
import { Link } from '@/components/Link/Link';
import { Article } from '@/tools/markdown.model';

interface Props {
  articles: Article[];
}

export const Articles: FunctionComponent<Props> = ({ articles }) => (
  <ul>
    {articles.map(({ route, title }) => (
      <li key={`article-${route}`}>
        <Link href={route}>{title || route}</Link>
      </li>
    ))}
  </ul>
);

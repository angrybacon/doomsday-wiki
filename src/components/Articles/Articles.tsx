import React, { FunctionComponent } from 'react';
import { Link } from '@/components/Link/Link';
import { Article } from '@/tools/markdown.model';

interface Props {
  articles: Article[];
}

export const Articles: FunctionComponent<Props> = ({ articles }) => (
  <ul>
    {articles.map(({ path, title }, index) => (
      <li key={`article-${path}-${index}`}>
        <Link href={path}>{title || path}</Link>
      </li>
    ))}
  </ul>
);

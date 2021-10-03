import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Link } from '@/components/Link/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

export interface Props extends ReactMarkdownProps {
  name?: string;
}

export const RemarkCard: FunctionComponent<Props> = ({ name }) => {
  if (!name) return null;
  return (
    <Link external href={`${SCRYFALL_SEARCH}?q=!"${name}"`}>
      {name}
    </Link>
  );
};

import { type FunctionComponent } from 'react';
import { type Options as ReactMarkdownOptions } from 'react-markdown';

import { Link } from '@/components/Link/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

interface Props extends ReactMarkdownOptions {
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

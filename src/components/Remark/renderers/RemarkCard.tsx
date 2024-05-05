import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Link } from '@/components/Link/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

type Props = ExtraProps & {
  name?: string;
};

export const RemarkCard: FunctionComponent<Props> = ({ name, node }) => {
  if (!name) {
    console.error('Missing card name', node);
    return null;
  }
  return (
    <Link external href={`${SCRYFALL_SEARCH}?q=!"${name}"`}>
      {name}
    </Link>
  );
};

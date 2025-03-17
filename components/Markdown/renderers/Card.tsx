import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Link } from '@/components/Link/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

type Props = ExtraProps & {
  name?: string;
};

// TODO Rename to `CardLink`?

export const Card: FunctionComponent<Props> = ({ name, node }) => {
  if (!name) {
    console.error('Missing card name', node);
    return null;
  }
  return <Link href={`${SCRYFALL_SEARCH}?q=!"${name}"`}>{name}</Link>;
};

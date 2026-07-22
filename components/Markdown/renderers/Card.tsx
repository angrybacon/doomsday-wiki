import type { ExtraProps } from 'react-markdown';

import { RemarkError } from '@korumite/kiwi';

import { Link } from '~/components/Link/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

type Props = {
  name?: string;
  node: ExtraProps['node'];
  path?: string;
};

export const Card = ({ name, node, path }: Props) => {
  if (!name) throw new RemarkError('Missing card name', { node, path });
  return <Link href={`${SCRYFALL_SEARCH}?q=!"${name}"`}>{name}</Link>;
};

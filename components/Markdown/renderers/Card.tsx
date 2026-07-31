import type { Hastified } from '~/components/Markdown/types';

import { RemarkError } from '@korumite/kiwi';

import { Link } from '~/components/Link/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

type Props = {
  node: Hastified<{ name: string }>;
  path?: string;
};

export const Card = ({ node, path }: Props) => {
  const { name } = node.properties;
  if (!name) throw new RemarkError('Missing card name', { node, path });
  return <Link href={`${SCRYFALL_SEARCH}?q=!"${name}"`}>{name}</Link>;
};

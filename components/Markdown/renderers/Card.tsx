import { type ExtraProps } from 'react-markdown';

import { Link } from '@/components/Link/Link';
import { RemarkError } from '@/tools/remark/RemarkError';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

type Props = ExtraProps & {
  name?: string;
  path?: string;
};

export const Card = ({ name, node, path }: Props) => {
  if (!name) throw new RemarkError('Missing card name', { node, path });
  return <Link href={`${SCRYFALL_SEARCH}?q=!"${name}"`}>{name}</Link>;
};

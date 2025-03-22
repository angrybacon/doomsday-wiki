import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Link } from '@/components/Link/Link';
import { RemarkError } from '@/tools/remark/RemarkError';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

type Props = ExtraProps & {
  file?: string;
  name?: string;
};

// TODO Rename to `CardLink`?

export const Card: FunctionComponent<Props> = ({ file, name, node }) => {
  if (!name) throw new RemarkError('Missing card name', { file, node });
  return <Link href={`${SCRYFALL_SEARCH}?q=!"${name}"`}>{name}</Link>;
};

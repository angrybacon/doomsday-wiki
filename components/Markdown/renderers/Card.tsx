import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { Hastified } from '~/components/Markdown/types';

import { RemarkError } from '@korumite/kiwi';

import { CardLink } from '~/components/CardLink/CardLink';

type Props = {
  data?: { card?: ScrySingleResponse };
  node: Hastified<{ name: string }>;
  path?: string;
};

export const Card = ({ data, node, path }: Props) => {
  if (!data?.card) throw new RemarkError('Missing card', { node, path });
  return <CardLink faces={data.card} />;
};

import type { Hastified } from '~/components/Markdown/types';
import type { ScrySingleResponseSlim } from '~/tools/scryfall/slim';

import { RemarkError } from '@korumite/kiwi';

import { CardLink } from '~/components/CardLink/CardLink';

type Props = {
  data?: { card?: ScrySingleResponseSlim };
  node: Hastified<{ name: string }>;
  path?: string;
};

export const Card = ({ data, node, path }: Props) => {
  if (!data?.card) throw new RemarkError('Missing card', { node, path });
  return <CardLink faces={data.card} />;
};

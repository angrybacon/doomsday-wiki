import type { Hastified } from '~/components/Markdown/types';
import type {
  DecklistExtra,
  Decklist as DecklistModel,
} from '~/tools/decklists/types';

import { RemarkError } from '@korumite/kiwi';

import { Decklist as DecklistAccordion } from '~/components/Decklist/Decklist';

type Props = {
  node: Hastified<{ decklist: DecklistModel & DecklistExtra }>;
  path?: string;
};

export const Decklist = ({ node, path }: Props) => {
  const { decklist } = node.properties;
  if (!decklist) throw new RemarkError('Missing deck', { node, path });
  const { authors, colors, main, mainCount, sideCount } = decklist;
  const date = decklist.dateFromPath ?? undefined;
  const side = decklist.side[0] ?? [];
  const title = decklist.title ?? decklist.titleFromPath;
  return (
    <DecklistAccordion
      authors={authors}
      colors={colors}
      date={date}
      main={main}
      mainCount={mainCount}
      side={side}
      sideCount={sideCount}
      title={title}
    />
  );
};

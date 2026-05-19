import { RemarkError } from '@korumite/kiwi';
import { type ExtraProps } from 'react-markdown';

import { Decklist as DecklistAccordion } from '@/components/Decklist/Decklist';
import {
  type DecklistExtra,
  type Decklist as DecklistModel,
} from '@/tools/decklists/types';

type Props = ExtraProps & {
  decklist?: DecklistModel & DecklistExtra;
  path?: string;
};

export const Decklist = ({ decklist, node, path }: Props) => {
  if (!decklist) throw new RemarkError('Missing deck', { node, path });

  const { authors, colors, main, mainCount, sideCount } = decklist;

  const date = decklist.dateFromPath || undefined;
  const side = decklist.side[0] || [];
  const title = decklist.title || decklist.titleFromPath;

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

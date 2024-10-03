import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Decklist as DecklistAccordion } from '@/components/Decklist/Decklist';
import {
  type DecklistExtra,
  type Decklist as DecklistModel,
} from '@/tools/decklists/types';

type Props = ExtraProps & {
  decklist?: DecklistModel & DecklistExtra;
};

export const Decklist: FunctionComponent<Props> = ({ decklist, node }) => {
  if (!decklist) {
    console.error('Missing card list in decklist', node);
    return null;
  }
  return (
    <DecklistAccordion
      authors={decklist.authors}
      colors={decklist.colors}
      date={decklist.date || undefined}
      main={decklist.main}
      mainCount={decklist.mainCount}
      side={decklist.side[0] || []}
      sideCount={decklist.sideCount}
      title={decklist.title || decklist.titleFromPath}
    />
  );
};

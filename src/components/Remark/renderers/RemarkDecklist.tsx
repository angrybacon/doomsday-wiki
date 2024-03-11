import { type FunctionComponent } from 'react';
import { ExtraProps } from 'react-markdown';

import { Decklist } from '@/components/Decklist/Decklist';
import {
  type DecklistExtra,
  type Decklist as DecklistModel,
} from '@/tools/decklists/types';

interface Props extends ExtraProps {
  decklist?: DecklistModel & DecklistExtra;
}

export const RemarkDecklist: FunctionComponent<Props> = ({
  decklist,
  node,
}) => {
  if (!decklist) {
    console.error('Missing card list in decklist', node);
    return null;
  }
  return (
    <Decklist
      authors={decklist.authors}
      colors={decklist.colors}
      date={decklist.date || undefined}
      main={decklist.main}
      mainCount={decklist.mainCount}
      side={decklist.side[0] || []}
      sideCount={decklist.sideCount}
      title={decklist.title || decklist.titleAsFile}
    />
  );
};

import { type FunctionComponent } from 'react';
import { type Options as ReactMarkdownOptions } from 'react-markdown';

import { Decklist } from '@/components/Decklist/Decklist';
import {
  type DecklistExtra,
  type Decklist as DecklistModel,
} from '@/tools/decklists/types';

interface Props extends ReactMarkdownOptions {
  decklist?: DecklistModel & DecklistExtra;
}

export const RemarkDecklist: FunctionComponent<Props> = ({ decklist }) => {
  if (!decklist) return null;
  const {
    authors,
    colors,
    date,
    main,
    mainCount,
    side,
    sideCount,
    title,
    titleAsFile,
  } = decklist;
  return (
    <Decklist
      authors={authors}
      colors={colors}
      date={date || undefined}
      main={main}
      mainCount={mainCount}
      side={side[0] || []}
      sideCount={sideCount}
      title={title || titleAsFile}
    />
  );
};

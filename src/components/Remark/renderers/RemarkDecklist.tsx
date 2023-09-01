import type { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Decklist } from '@/components/Decklist/Decklist';
import type {
  Decklist as DecklistModel,
  DecklistExtra,
} from '@/tools/decklists/types';

interface Props extends ReactMarkdownProps {
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

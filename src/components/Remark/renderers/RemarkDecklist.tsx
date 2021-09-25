import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Decklist } from '@/components/Decklist/Decklist';
import type {
  Decklist as DecklistModel,
  DecklistExtra,
} from '@/tools/decklists/types';

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: DecklistModel & DecklistExtra;
  };
}

export const RemarkDecklist: FunctionComponent<Props> = ({ node }) => {
  const { author, date, main, side, title, titleAsFile } = node.properties;
  return (
    <Decklist
      author={author}
      date={date || undefined}
      main={main}
      side={side?.[0]}
      title={title || titleAsFile}
    />
  );
};

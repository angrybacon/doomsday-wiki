import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Decklist } from '@/components/Decklist/Decklist';
import type { Decklist as DecklistModel } from '@/tools/decklists/types';

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: { decklist: DecklistModel };
  };
  path?: string;
}

export const RemarkDecklist: FunctionComponent<Props> = ({ node, path }) => {
  if (!path) return null;
  const { decklist } = node.properties;
  const { author, main, side, title } = decklist;
  return (
    <Decklist
      author={author}
      main={main}
      path={path}
      side={side?.[0]}
      title={title}
    />
  );
};

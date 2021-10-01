import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Mana } from '@/components/Mana/Mana';

export interface Props extends ReactMarkdownProps {
  pattern?: string;
}

export const RemarkMana: FunctionComponent<Props> = ({ pattern }) => {
  if (!pattern) return null;
  return <Mana pattern={pattern.toLowerCase()} />;
};

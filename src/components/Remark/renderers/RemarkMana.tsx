import { type FunctionComponent } from 'react';
import { type Options as MarkdownOptions } from 'react-markdown';

import { Mana } from '@/components/Mana/Mana';

interface Props extends MarkdownOptions {
  pattern?: string;
}

export const RemarkMana: FunctionComponent<Props> = ({ pattern }) => {
  if (!pattern) return null;
  return <Mana pattern={pattern.toLowerCase()} />;
};

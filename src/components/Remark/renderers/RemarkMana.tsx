import { type FunctionComponent } from 'react';
import { type Options as ReactMarkdownOptions } from 'react-markdown';

import { Mana } from '@/components/Mana/Mana';

interface Props extends ReactMarkdownOptions {
  pattern?: string;
}

export const RemarkMana: FunctionComponent<Props> = ({ pattern }) => {
  if (!pattern) return null;
  return <Mana pattern={pattern.toLowerCase()} />;
};

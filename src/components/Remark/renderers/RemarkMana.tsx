import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Mana } from '@/components/Mana/Mana';

interface Props extends ExtraProps {
  pattern?: string;
}

export const RemarkMana: FunctionComponent<Props> = ({ node, pattern }) => {
  if (!pattern) {
    console.error('Missing pattern in mana', node);
    return null;
  }
  return <Mana pattern={pattern.toLowerCase()} />;
};

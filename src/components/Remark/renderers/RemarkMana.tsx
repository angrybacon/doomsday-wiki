import { type FunctionComponent, type PropsWithChildren } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Mana } from '@/components/Mana/Mana';

type Props = ExtraProps & PropsWithChildren & { pattern?: string };

export const RemarkMana: FunctionComponent<Props> = ({
  children,
  node,
  pattern,
}) => {
  if (!pattern) {
    console.error('Missing pattern in mana', node);
    return children;
  }
  return <Mana pattern={pattern} />;
};

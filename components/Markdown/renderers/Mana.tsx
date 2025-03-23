import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

import { Mana as ManaComponent } from '@/components/Mana/Mana';
import { RemarkError } from '@/tools/remark/RemarkError';

type Props = ExtraProps & {
  file?: string;
  pattern?: string;
};

export const Mana: FunctionComponent<Props> = ({ node, file, pattern }) => {
  if (!pattern) throw new RemarkError('Missing mana pattern', { file, node });
  return <ManaComponent pattern={pattern} />;
};

import { type ExtraProps } from 'react-markdown';

import { Mana as ManaComponent } from '@/components/Mana/Mana';
import { RemarkError } from '@/tools/remark/RemarkError';

type Props = ExtraProps & {
  file?: string;
  pattern?: string;
};

export const Mana = ({ node, file, pattern }: Props) => {
  if (!pattern) throw new RemarkError('Missing mana pattern', { file, node });
  return <ManaComponent pattern={pattern} />;
};

import { type ExtraProps } from 'react-markdown';

import { Mana as ManaComponent } from '@/components/Mana/Mana';
import { RemarkError } from '@/tools/remark/RemarkError';

type Props = ExtraProps & {
  path?: string;
  pattern?: string;
};

export const Mana = ({ node, path, pattern }: Props) => {
  if (!pattern) throw new RemarkError('Missing mana pattern', { node, path });
  return <ManaComponent pattern={pattern} />;
};

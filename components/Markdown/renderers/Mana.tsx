import type { ExtraProps } from 'react-markdown';

import { RemarkError } from '@korumite/kiwi';

import { Mana as ManaComponent } from '@/components/Mana/Mana';

type Props = {
  node: ExtraProps['node'];
  path?: string;
  pattern?: string;
};

export const Mana = ({ node, path, pattern }: Props) => {
  if (!pattern) throw new RemarkError('Missing mana pattern', { node, path });
  return <ManaComponent pattern={pattern} />;
};

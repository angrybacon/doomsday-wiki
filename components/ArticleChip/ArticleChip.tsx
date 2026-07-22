import type { ChipProps } from '@mui/material';
import type { Kind } from '~/tools/markdown/schemas';

import { Chip } from '@mui/material';

const KIND_TO_COLOR: Record<string, ChipProps['color']> = {
  ARTICLE: 'article',
  PRIMER: 'primer',
  REPORT: 'report',
} satisfies Record<Kind, ChipProps['color']>;

type Props = Omit<ChipProps, 'label'> & {
  label: string;
};

export const ArticleChip = ({ label, ...rest }: Props) => (
  <Chip
    {...rest}
    color={KIND_TO_COLOR[label]}
    label={label}
    size="small"
    variant="filled"
  />
);

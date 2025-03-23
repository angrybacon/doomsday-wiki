import { Chip, type ChipProps } from '@mui/material';

import { type KINDS } from '@/tools/markdown/constants';

const KIND_TO_COLOR: Record<string, ChipProps['color']> = {
  ARTICLE: 'article',
  PRIMER: 'primer',
  REPORT: 'report',
} satisfies Record<(typeof KINDS)[number], ChipProps['color']>;

type Props = Omit<ChipProps, 'label'> & {
  label: string;
};

export const ArticleChip = ({ label, ...rest }: Props) => (
  <Chip
    color={KIND_TO_COLOR[label]}
    label={label}
    size="small"
    variant="filled"
    {...rest}
  />
);

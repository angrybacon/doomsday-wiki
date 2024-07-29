import { Chip, type ChipProps } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { type FunctionComponent } from 'react';

import { type Kind } from '@/tools/markdown/constants/Kind';

const KIND_TO_LABEL: Record<keyof typeof Kind, string> = {
  ARTICLE: 'Article',
  PRIMER: 'Primer',
  REPORT: 'Report',
};

type Props = Omit<ChipProps, 'label'> &
  (
    | { kind?: never; label: string }
    | { kind: keyof typeof Kind; label?: never }
  );

export const ArticleChip: FunctionComponent<Props> = ({
  kind,
  label,
  sx = [],
  ...rest
}) => (
  <Chip
    label={label ?? KIND_TO_LABEL[kind]}
    size="small"
    variant={kind ? 'outlined' : 'filled'}
    {...rest}
    sx={[
      kind !== undefined &&
        (({ palette }) => ({
          backgroundColor: alpha(palette.document[kind], 0.1),
          borderColor: 'unset',
          color: palette.document[kind],
        })),
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  />
);

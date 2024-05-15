import { Chip, type ChipProps } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { type FunctionComponent } from 'react';

import { Kind } from '@/tools/markdown/constants/Kind';

const KINDS: Record<Kind, string> = {
  [Kind.ARTICLE]: 'Article',
  [Kind.PRIMER]: 'Primer',
  [Kind.REPORT]: 'Report',
};

type Props = Omit<ChipProps, 'label'> &
  ({ kind?: never; label: string } | { kind: Kind; label?: never });

export const ArticleChip: FunctionComponent<Props> = ({
  kind,
  label,
  sx = [],
  ...rest
}) => (
  <Chip
    label={label ?? KINDS[kind as Kind]}
    size="small"
    variant={kind ? 'outlined' : 'filled'}
    {...rest}
    sx={[
      kind !== undefined &&
        (({ palette }) => ({
          backgroundColor: alpha(palette.document[kind as Kind], 0.1),
          borderColor: 'unset',
          color: palette.document[kind as Kind],
        })),
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  />
);

'use client';

import type { DividerProps as MuiDividerProps } from '@mui/material';

import { Divider as MuiDivider } from '@mui/material';

type Props = Pick<MuiDividerProps, 'component' | 'role' | 'sx'>;

export const Divider = ({ sx, ...rest }: Props) => (
  <MuiDivider
    sx={[
      (theme) => ({
        background: `linear-gradient(to right, transparent, ${theme.vars.palette.divider}, transparent)`,
        border: 0,
        height: '1px',
      }),
      // oxlint-disable-next-line no-unsafe-assignment
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);

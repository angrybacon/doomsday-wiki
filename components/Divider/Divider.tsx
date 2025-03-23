'use client';

import {
  Divider as MuiDivider,
  type DividerProps as MuiDividerProps,
} from '@mui/material';

type Props = Pick<MuiDividerProps, 'component' | 'role' | 'sx'>;

export const Divider = ({ sx, ...rest }: Props) => (
  <MuiDivider
    sx={[
      ({ vars }) => ({
        background: `linear-gradient(to right, transparent, ${vars.palette.divider}, transparent)`,
        border: 0,
        height: '1px',
      }),
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);

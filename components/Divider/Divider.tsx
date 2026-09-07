import type { DividerProps as MuiDividerProps } from '@mui/material';

import { Divider as MuiDivider } from '@mui/material';

type Props = Pick<MuiDividerProps, 'component' | 'role' | 'sx'>;

export const Divider = ({ sx, ...rest }: Props) => (
  <MuiDivider
    sx={[
      {
        background:
          'linear-gradient(to right, transparent, var(--mui-palette-divider), transparent)',
        border: 0,
        height: '1px',
      },
      // oxlint-disable-next-line typescript/no-unsafe-assignment
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);

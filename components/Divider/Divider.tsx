'use client';

import { Divider as MuiDivider } from '@mui/material';

export const Divider = () => (
  <MuiDivider
    sx={({ palette }) => ({
      background: `linear-gradient(to right, transparent, ${palette.divider}, transparent)`,
      border: 0,
      height: '1px',
    })}
  />
);

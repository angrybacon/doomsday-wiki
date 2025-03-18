'use client';

import { Divider as MuiDivider } from '@mui/material';

export const Divider = () => (
  <MuiDivider
    sx={({ vars }) => ({
      background: `linear-gradient(to right, transparent, ${vars.palette.divider}, transparent)`,
      border: 0,
      height: '1px',
    })}
  />
);

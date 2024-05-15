import { Divider as MuiDivider } from '@mui/material';
import { type Components } from 'react-markdown';

export const Divider: Components['hr'] = () => (
  <MuiDivider sx={({ mixins }) => ({ ...mixins.barf, my: 0 })} />
);

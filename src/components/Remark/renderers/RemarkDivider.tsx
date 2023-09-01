import type { FunctionComponent } from 'react';
import Divider from '@mui/material/Divider';

export const RemarkDivider: FunctionComponent = () => (
  <Divider sx={({ mixins }) => ({ ...mixins.barf, my: 0 })} />
);

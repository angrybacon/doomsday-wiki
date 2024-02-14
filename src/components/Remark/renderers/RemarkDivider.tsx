import Divider from '@mui/material/Divider';
import { type FunctionComponent } from 'react';

export const RemarkDivider: FunctionComponent = () => (
  <Divider sx={({ mixins }) => ({ ...mixins.barf, my: 0 })} />
);

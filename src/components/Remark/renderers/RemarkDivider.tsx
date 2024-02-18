import Divider from '@mui/material/Divider';
import { Components } from 'react-markdown';

export const RemarkDivider: Components['hr'] = () => (
  <Divider sx={({ mixins }) => ({ ...mixins.barf, my: 0 })} />
);

import { type Theme } from '@mui/material/styles';
import { type CSSProperties } from '@mui/material/styles/createMixins';

export const barf = ({ breakpoints, spacing }: Theme): CSSProperties => ({
  marginLeft: spacing(-4),
  marginRight: spacing(-4),
  width: 'auto',
  [breakpoints.down('sm')]: {
    marginLeft: spacing(-2),
    marginRight: spacing(-2),
  },
});

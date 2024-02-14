import { type Theme } from '@mui/material/styles';
import { type CSSProperties } from '@mui/material/styles/createMixins';

export const gutters = ({ breakpoints, spacing }: Theme): CSSProperties => ({
  paddingLeft: spacing(4),
  paddingRight: spacing(4),
  [breakpoints.down('sm')]: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
});

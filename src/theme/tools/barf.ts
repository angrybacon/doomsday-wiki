import type { Theme } from '@mui/material/styles';
import type { CSSProperties } from '@mui/material/styles/createMixins';

export const barf = (theme: Theme): CSSProperties => ({
  marginLeft: theme.spacing(-4),
  marginRight: theme.spacing(-4),
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
});

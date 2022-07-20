import type { Theme } from '@mui/material/styles';
import type { CSSProperties } from '@mui/material/styles/createMixins';

type Gutters = (theme: Theme) => CSSProperties;

export const gutters: Gutters = (theme) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

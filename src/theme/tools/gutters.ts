import type { Theme } from '@mui/material/styles';
import type { CSSProperties } from '@mui/material/styles/createMixins';

type Gutters = (theme: Theme) => CSSProperties;

export const gutters: Gutters = (theme) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.only('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

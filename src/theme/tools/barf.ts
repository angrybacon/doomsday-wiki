import type { Theme } from '@mui/material/styles';
import type { CSSProperties } from '@mui/material/styles/createMixins';

type Barf = (theme: Theme) => CSSProperties;

export const barf: Barf = (theme) => ({
  marginLeft: theme.spacing(-4),
  marginRight: theme.spacing(-4),
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
});

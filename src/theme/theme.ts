import { createTheme } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles' {
  interface Theme {
    drawer: { width: number };
  }

  interface ThemeOptions {
    drawer?: { width?: number };
  }
}

const base: Theme = createTheme();

export const theme: Theme = createTheme({
  drawer: { width: 320 },
  overrides: {
    MuiCardContent: {
      root: {
        padding: base.spacing(2),
      },
    },
  },
  typography: {
    fontSize: 16,
    h1: { fontSize: base.typography.pxToRem(64) },
    h2: { fontSize: base.typography.pxToRem(48) },
    h3: { fontSize: base.typography.pxToRem(40) },
    h4: { fontSize: base.typography.pxToRem(32) },
    h5: { fontSize: base.typography.pxToRem(24) },
    h6: { fontSize: base.typography.pxToRem(20) },
  },
});

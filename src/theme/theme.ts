import { createTheme } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/deepPurple';

declare module '@material-ui/core/styles' {
  interface Theme {
    drawer: { width: number };
  }

  interface ThemeOptions {
    drawer?: { width?: number };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    pile: string;
  }
}

const base: Theme = createTheme();

export const theme: Theme = createTheme({
  drawer: { width: 320 },
  palette: {
    background: { pile: primary[50] },
    primary: { main: primary[600] },
  },
  overrides: {
    MuiCardContent: {
      root: {
        padding: base.spacing(3),
      },
    },
    MuiTypography: {
      gutterBottom: {
        '&:not(:first-child)': { marginTop: '.6em' },
        '&:not(:last-child)': { marginBottom: '.6em' },
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

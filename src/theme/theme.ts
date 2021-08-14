import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles' {
  interface Theme {
    drawer: { width: number };
  }

  interface ThemeOptions {
    drawer?: { width?: number };
  }
}

export const theme = createTheme({
  drawer: { width: 320 },
  typography: { fontSize: 16 },
});

import { Theme, ThemeOptions, createTheme } from '@material-ui/core/styles';
import type { CSSProperties } from '@material-ui/core/styles/withStyles';
import primary from '@material-ui/core/colors/deepPurple';
import secondary from '@material-ui/core/colors/pink';
import '@fontsource/libre-baskerville';

interface DrawerOptions {
  width: number;
}

declare module '@material-ui/core/styles' {
  interface Theme {
    drawer: DrawerOptions;
  }

  interface ThemeOptions {
    drawer: DrawerOptions;
  }
}

declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    barf: () => CSSProperties;
  }
}

const base: Theme = createTheme();

const gutters = () => ({
  paddingLeft: base.spacing(3),
  paddingRight: base.spacing(3),
  [base.breakpoints.only('xs')]: {
    paddingLeft: base.spacing(2),
    paddingRight: base.spacing(2),
  },
});

const barf = () => ({
  marginLeft: -base.spacing(3),
  marginRight: -base.spacing(3),
  [base.breakpoints.only('xs')]: {
    marginLeft: -base.spacing(2),
    marginRight: -base.spacing(2),
  },
});

const options: ThemeOptions = {
  drawer: { width: 320 },
  mixins: { barf, gutters },
  overrides: {
    MuiCardContent: {
      root: {
        padding: base.spacing(3),
        ...gutters(),
      },
    },
    MuiContainer: {
      root: {
        [base.breakpoints.only('xs')]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        em: {
          fontFamily: 'Libre Baskerville, serif',
          fontSize: '0.9em',
          fontStyle: 'italic',
        },
      },
    },
    MuiLink: {
      root: { color: base.palette.secondary.light },
    },
    MuiPaper: {
      rounded: {
        borderRadius: base.spacing(),
        [base.breakpoints.only('xs')]: { borderRadius: 0 },
      },
    },
    MuiTypography: {
      gutterBottom: {
        '&:not(:first-child)': { marginTop: '.6em' },
        '&:not(:last-child)': { marginBottom: '.6em' },
      },
      h1: { marginBottom: '.8em' },
      paragraph: { '&:last-child': { marginBottom: 0 } },
    },
  },
  palette: { primary, secondary, type: 'dark' },
  typography: {
    fontSize: 16,
    h1: { fontSize: base.typography.pxToRem(64) },
    h2: { fontSize: base.typography.pxToRem(48) },
    h3: { fontSize: base.typography.pxToRem(40) },
    h4: { fontSize: base.typography.pxToRem(32) },
    h5: { fontSize: base.typography.pxToRem(26) },
    h6: { fontSize: base.typography.pxToRem(22) },
  },
};

export const darkTheme: Theme = createTheme({
  ...options,
  palette: { ...options.palette, type: 'dark' },
});

export const lightTheme: Theme = createTheme({
  ...options,
  palette: { ...options.palette, type: 'light' },
});

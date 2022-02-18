import { Theme, ThemeOptions, alpha, createTheme } from '@mui/material/styles';
import { deepPurple as primary, pink as secondary } from '@mui/material/colors';
import '@fontsource/libre-baskerville';

interface DrawerOptions {
  width: number;
}

declare module '@mui/material/styles' {
  interface Theme {
    drawer: DrawerOptions;
  }

  interface ThemeOptions {
    drawer: DrawerOptions;
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    barf: () => CSSProperties;
    gutters: () => CSSProperties;
  }
}

const base: Theme = createTheme({
  palette: { primary, secondary },
} as ThemeOptions);

const gutters = () => ({
  paddingLeft: base.spacing(3),
  paddingRight: base.spacing(3),
  [base.breakpoints.only('xs')]: {
    paddingLeft: base.spacing(2),
    paddingRight: base.spacing(2),
  },
});

const barf = () => ({
  marginLeft: base.spacing(-3),
  marginRight: base.spacing(-3),
  [base.breakpoints.only('xs')]: {
    marginLeft: base.spacing(-2),
    marginRight: base.spacing(-2),
  },
});

const options: ThemeOptions = {
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: base.spacing(3),
          ...gutters(),
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [base.breakpoints.only('xs')]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          em: {
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '0.9em',
            fontStyle: 'italic',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: base.spacing(),
          [base.breakpoints.only('xs')]: { borderRadius: 0 },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: { marginBottom: '.8em' },
        gutterBottom: {
          // NOTE Increase specificity
          '&&': { marginBottom: '.6em', marginTop: '.6em' },
        },
        paragraph: { '&:last-child': { marginBottom: 0 } },
      },
    },
  },
  drawer: { width: 320 },
  mixins: { barf, gutters },
  palette: { primary, secondary },
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
  components: {
    ...options.components,
    MuiLink: {
      styleOverrides: {
        root: {
          color: base.palette.secondary.light,
          textDecorationColor: alpha(base.palette.secondary.main, 0.5),
        },
      },
    },
  },
  palette: {
    ...options.palette,
    background: {
      default: '#121212',
      paper: base.palette.grey[900],
    },
    mode: 'dark',
  },
});

export const lightTheme: Theme = createTheme({
  ...options,
  components: {
    ...options.components,
    MuiLink: {
      styleOverrides: {
        root: {
          color: base.palette.secondary.dark,
          textDecorationColor: alpha(base.palette.secondary.main, 0.5),
        },
      },
    },
  },
  palette: {
    ...options.palette,
    background: { default: base.palette.grey[100] },
    mode: 'light',
  },
});

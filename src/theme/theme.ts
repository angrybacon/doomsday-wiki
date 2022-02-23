import {
  deepPurple as primary,
  grey,
  pink as secondary,
} from '@mui/material/colors';
import { Theme, ThemeOptions, alpha, createTheme } from '@mui/material/styles';
import '@fontsource/libre-baskerville';
import { barf } from '@/theme/tools/barf';
import { gutters } from '@/theme/tools/gutters';

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
    barf: CSSProperties;
    gutters: CSSProperties;
  }
}

declare module '@mui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/system/createTheme/shape' {
  interface Shape {
    borderRadiusPaper: number;
  }
}

export const baseTheme: (theme: Theme) => Theme = (theme) => {
  const { breakpoints, palette, spacing, typography } = theme;
  const { mode } = palette;
  const borderRadiusPaper = 16;
  return createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: { backgroundColor: 'transparent' },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: { '&:hover': { backgroundColor: palette.action.hover } },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: spacing(3),
            ...gutters(theme),
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            [breakpoints.only('xs')]: {
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
      MuiDivider: {
        styleOverrides: {
          root: {
            // NOTE Increase specificity
            '&&': { marginBottom: spacing(3), marginTop: spacing(3) },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: palette.secondary[mode === 'dark' ? 'light' : 'dark'],
            textDecorationColor: alpha(palette.secondary.main, 0.5),
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: borderRadiusPaper,
            [breakpoints.only('xs')]: { borderRadius: 0 },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          gutterBottom: {
            // NOTE Increase specificity
            '&&': { marginBottom: '.6em', marginTop: '.6em' },
          },
          h1: {
            marginBottom: '.8em',
            [breakpoints.down('sm')]: {
              fontSize: typography.pxToRem(44),
            },
          },
          h2: {
            [breakpoints.down('sm')]: {
              fontSize: typography.pxToRem(40),
            },
          },
          h3: {
            [breakpoints.down('sm')]: {
              fontSize: typography.pxToRem(36),
            },
          },
          paragraph: { '&:last-child': { marginBottom: 0 } },
        },
      },
    },
    drawer: { width: 310 },
    mixins: { barf: barf(theme), gutters: gutters(theme) },
    palette,
    shape: { borderRadius: 8, borderRadiusPaper },
    typography: {
      fontSize: 16,
      h1: { fontSize: typography.pxToRem(64) },
      h2: { fontSize: typography.pxToRem(48) },
      h3: { fontSize: typography.pxToRem(38) },
      h4: { fontSize: typography.pxToRem(32) },
      h5: { fontSize: typography.pxToRem(26) },
      h6: { fontSize: typography.pxToRem(22) },
    },
  });
};

export const darkTheme: Theme = createTheme({
  palette: {
    background: { default: '#121212', paper: grey[900] },
    mode: 'dark',
    primary,
    secondary,
  },
} as ThemeOptions);

export const lightTheme: Theme = createTheme({
  palette: {
    background: { default: grey[50] },
    mode: 'light',
    primary,
    secondary,
  },
} as ThemeOptions);

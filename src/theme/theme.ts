import {
  amber as article,
  grey,
  deepPurple as primary,
  teal as primer,
  purple as report,
  pink as secondary,
} from '@mui/material/colors';
import {
  alpha,
  createTheme,
  type Theme,
  type ThemeOptions,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { barf } from '@/theme/tools/barf';
import { gutters } from '@/theme/tools/gutters';
import { toolbarMargin } from '@/theme/tools/toolbarMargin';
import { type KINDS } from '@/tools/markdown/constants';

import '@fontsource/libre-baskerville';

/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare module '@mui/material/styles' {
  interface Palette {
    dividerOpaque: string;
    document: Record<(typeof KINDS)[number], string>;
  }

  interface PaletteOptions {
    dividerOpaque: string;
    document: Record<(typeof KINDS)[number], string>;
  }

  interface Theme {
    drawer: { width: string };
  }

  interface ThemeOptions {
    drawer?: { width: string };
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    barf: CSSProperties;
    gutters: CSSProperties;
    toolbarMargin: CSSProperties;
  }
}

declare module '@mui/system/createTheme/shape' {
  interface Shape {
    borderRadiusPaper: number;
  }
}

/* eslint-enable @typescript-eslint/consistent-type-definitions */

const customizeTheme = (options: ThemeOptions): Theme => {
  const theme = createTheme(options);
  const { breakpoints, palette, spacing, typography } = theme;
  const { mode } = palette;
  const borderRadiusPaper = 16;
  return createTheme(
    deepmerge(theme, {
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
              padding: spacing(4),
              ...gutters(theme),
              '&:last-child': { paddingBottom: spacing(4) },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            iconMedium: { marginLeft: spacing(1.6) },
            iconSmall: { marginLeft: spacing(0.8) },
            root: { cursor: 'unset' },
            sizeSmall: { fontSize: typography.caption.fontSize },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              [breakpoints.down('sm')]: {
                paddingLeft: 0,
                paddingRight: 0,
              },
            },
          },
        },
        MuiCssBaseline: {
          styleOverrides: {
            '#__next, html, body': {
              height: '100%',
              fontSize: 18,
              scrollBehavior: 'smooth',
              scrollPadding: spacing(2),
            },
            'blockquote, ol, p, pre, ul': { margin: 0 },
            em: {
              fontDisplay: 'swap',
              fontFamily: 'Libre Baskerville, serif',
              fontSize: '0.9em',
              fontStyle: 'italic',
            },
            'ol, ul': {
              listStylePosition: 'outside',
              paddingLeft: spacing(3),
            },
          },
        },
        MuiDivider: {
          defaultProps: {
            role: 'presentation',
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
              [breakpoints.down('sm')]: { borderRadius: 0 },
            },
          },
        },
        MuiTooltip: {
          defaultProps: {
            arrow: true,
          },
          styleOverrides: {
            tooltip: { textAlign: 'center' },
          },
        },
        MuiTypography: {
          styleOverrides: {
            gutterBottom: {
              // NOTE Increase specificity
              '&&': { marginBottom: '.3em', marginTop: '.3em' },
            },
            h1: {
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
          },
        },
      },
      drawer: { width: '320px' },
      mixins: {
        barf: barf(theme),
        gutters: gutters(theme),
        toolbarMargin: toolbarMargin(theme),
      },
      palette,
      shape: { borderRadius: 8, borderRadiusPaper },
      typography: {
        h1: { fontSize: typography.pxToRem(64) },
        h2: { fontSize: typography.pxToRem(48) },
        h3: { fontSize: typography.pxToRem(38) },
        h4: { fontSize: typography.pxToRem(32) },
        h5: { fontSize: typography.pxToRem(26) },
        h6: { fontSize: typography.pxToRem(22) },
      },
    }),
  );
};

export const darkTheme: Theme = customizeTheme({
  palette: {
    background: { default: '#121212', paper: grey[900] },
    dividerOpaque: grey[800],
    document: {
      ARTICLE: article.A700,
      PRIMER: primer.A700,
      REPORT: report.A400,
    },
    mode: 'dark',
    primary,
    secondary,
  },
});

export const lightTheme: Theme = customizeTheme({
  palette: {
    background: { default: grey[100] },
    dividerOpaque: grey[300],
    document: {
      ARTICLE: article.A700,
      PRIMER: primer.A700,
      REPORT: report.A700,
    },
    mode: 'light',
    primary,
    secondary,
  },
});

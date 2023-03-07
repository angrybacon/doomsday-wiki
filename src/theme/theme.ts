import {
  amber as article,
  deepPurple as primary,
  grey,
  pink as secondary,
  purple as report,
  teal as primer,
} from '@mui/material/colors';
import { alpha, createTheme } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import type { Kind } from '@/tools/markdown/constants/Kind';
import { barf } from '@/theme/tools/barf';
import { gutters } from '@/theme/tools/gutters';

import '@fontsource/libre-baskerville';

declare module '@mui/material/styles' {
  interface Palette {
    dividerOpaque: string;
    document: Record<Kind, string>;
  }

  interface PaletteOptions {
    dividerOpaque: string;
    document: Record<Kind, string>;
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
  }
}

declare module '@mui/system/createTheme/shape' {
  interface Shape {
    borderRadiusPaper: number;
  }
}

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
            blockquote: { margin: 0 },
            '#__next, html, body': { height: '100%', fontSize: 18 },
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
          styleOverrides: {
            tooltip: { textAlign: 'center' },
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
          },
        },
      },
      drawer: { width: '320px' },
      mixins: { barf: barf(theme), gutters: gutters(theme) },
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
    })
  );
};

export const darkTheme: Theme = customizeTheme({
  palette: {
    background: { default: '#121212', paper: grey[900] },
    dividerOpaque: grey[800],
    document: {
      article: article.A700,
      primer: primer.A700,
      report: report.A400,
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
      article: article.A700,
      primer: primer.A700,
      report: report.A700,
    },
    mode: 'light',
    primary,
    secondary,
  },
});

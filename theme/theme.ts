'use client';

import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

import { blur } from '@/theme/mixins';
import { article, primary, primer, report, secondary } from '@/theme/palette';

import '@fontsource/libre-baskerville';

/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    article: true;
    primer: true;
    report: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    article: Palette['primary'];
    primer: Palette['primary'];
    report: Palette['primary'];
  }

  interface PaletteOptions {
    article?: Palette['primary'];
    primer?: Palette['primary'];
    report?: Palette['primary'];
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    blur: typeof blur;
  }
}

/* eslint-enable @typescript-eslint/consistent-type-definitions */

const { palette } = createTheme();

const base = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        article: palette.augmentColor({ color: { main: article.A200 } }),
        primary,
        primer: palette.augmentColor({ color: { main: primer.A200 } }),
        report: palette.augmentColor({ color: { main: report.A200 } }),
        secondary,
      },
    },
    light: {
      palette: {
        article: palette.augmentColor({ color: { main: article.A100 } }),
        primary,
        primer: palette.augmentColor({ color: { main: primer.A100 } }),
        report: palette.augmentColor({ color: { main: report.A100 } }),
        secondary,
      },
    },
  },
});

export const theme = createTheme(
  deepmerge(base, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { fontSize: 18, scrollBehavior: 'smooth' },
          'blockquote, ol, p, pre, ul': { margin: 0 },
          em: {
            fontDisplay: 'swap',
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '0.9em',
            fontStyle: 'italic',
          },
        },
      },
      MuiTooltip: {
        defaultProps: { arrow: true },
        styleOverrides: { tooltip: { textAlign: 'center' } },
      },
    },
    cssVariables: { colorSchemeSelector: 'class' },
    mixins: { blur },
    typography: {
      fontFamily: 'var(--font-roboto)',
      h1: { fontSize: base.typography.pxToRem(46) },
      h2: { fontSize: base.typography.pxToRem(40) },
      h3: { fontSize: base.typography.pxToRem(34) },
      h4: { fontSize: base.typography.pxToRem(30) },
      h5: { fontSize: base.typography.pxToRem(24) },
      h6: { fontSize: base.typography.pxToRem(20) },
    },
  } satisfies Parameters<typeof createTheme>[0]),
);

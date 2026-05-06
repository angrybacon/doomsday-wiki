'use client';

// NOTE Enable `vars` properties inside of the Theme
import type {} from '@mui/material/themeCssVarsAugmentation';

import {
  accordionClasses,
  collapseClasses,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';

import { blur, recess } from '@/theme/mixins';
import { article, primary, primer, report, secondary } from '@/theme/palette';

/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    article: true;
    primer: true;
    report: true;
  }
}

declare module '@mui/material/styles' {
  interface Mixins {
    blur: typeof blur;
    recess: typeof recess;
  }

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

/* eslint-enable @typescript-eslint/consistent-type-definitions */

const { palette } = createTheme();

export const theme = responsiveFontSizes(
  createTheme({
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
    components: {
      MuiAccordion: {
        defaultProps: { elevation: 0, square: true },
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              border: 1,
              borderColor: 'divider',
              borderRadius: 4,
              overflow: 'hidden',
              '&:has(+ &)': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              '& + &': {
                borderTop: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              [`&.${accordionClasses.expanded} .${collapseClasses.root}`]: {
                borderTop: 1,
                borderTopColor: 'divider',
              },
            }),
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: ({ theme }) => ({
            ...theme.mixins.recess(theme)('Y'),
            padding: theme.spacing(2),
          }),
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({ '&:hover': { bgcolor: 'action.hover' } }),
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          'blockquote, ol, p, pre, ul': { margin: 0, padding: 0 },
          'blockquote, em': {
            fontDisplay: 'swap',
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '0.9em',
            fontStyle: 'italic',
          },
          body: { display: 'flex' },
          html: {
            fontSize: 18,
            scrollBehavior: 'smooth',
            scrollPaddingTop: 64,
          },
          'ol, ul': { paddingLeft: '1em' },
        },
      },
      MuiTooltip: {
        defaultProps: { arrow: true },
        styleOverrides: {
          tooltip: { textAlign: 'center', whiteSpace: 'pre-line' },
        },
      },
    },
    cssVariables: { colorSchemeSelector: 'data' },
    mixins: { blur, recess },
    typography: {
      fontFamily: 'var(--font-roboto)',
      h1: { fontSize: '3.2rem' },
      h2: { fontSize: '2.6rem' },
      h3: { fontSize: '2.4rem' },
      h4: { fontSize: '2.0rem' },
      h5: { fontSize: '1.4rem' },
      h6: { fontSize: '1.2rem' },
    },
  }),
);

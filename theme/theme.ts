'use client';

// NOTE Enable `vars` properties inside of the Theme
// oxlint-disable-next-line import/no-empty-named-blocks unicorn/require-module-specifiers
import type {} from '@mui/material/themeCssVarsAugmentation';

import {
  accordionClasses,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';

import { TOOLBAR_HEIGHT } from '~/theme/constants';
import { blur, recess } from '~/theme/mixins';
import { article, primary, primer, report, secondary } from '~/theme/palette';

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
        defaultProps: {
          elevation: 0,
          // NOTE Prevent overly specific roundness from base theme
          square: true,
        },
        styleOverrides: {
          root: (options) =>
            options.theme.unstable_sx({
              border: 1,
              borderColor: 'divider',
              borderRadius: 4,
              overflow: 'hidden',
              [`&.${accordionClasses.expanded}`]: { margin: 0 },
              '&:has(+ &)': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              '& + &': {
                borderTop: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
            }),
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: (options) => ({
            ...options.theme.mixins.recess('Y'),
            padding: options.theme.spacing(2),
          }),
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: (options) =>
            options.theme.unstable_sx({
              '&:hover': { bgcolor: 'action.hover' },
            }),
        },
      },
      MuiCssBaseline: {
        styleOverrides: (_theme) => ({
          'blockquote, ol, p, pre, ul': { margin: 0, padding: 0 },
          'blockquote, em': {
            fontDisplay: 'swap',
            fontFamily: 'Libre Baskerville, serif',
            fontSize: '0.9em',
            fontStyle: 'italic',
          },
          body: { display: 'flex' },
          'em > em': { fontStyle: 'normal' },
          html: {
            fontSize: 18,
            scrollBehavior: 'smooth',
            scrollPaddingTop: `calc(${TOOLBAR_HEIGHT}px + ${_theme.spacing(3)})`,
          },
          'ol, ul': { paddingLeft: '1em' },
        }),
      },
      MuiDrawer: {
        styleOverrides: {
          paper: (options) => ({
            ...options.theme.mixins.blur('strong'),
            backgroundColor:
              'rgba(var(--mui-palette-background-paperChannel) / .9)',
          }),
        },
      },
      MuiTooltip: {
        defaultProps: { arrow: true },
        styleOverrides: {
          tooltip: { textAlign: 'center', whiteSpace: 'pre-line' },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: { fontWeight: 'lighter', paddingBottom: 8, paddingTop: 24 },
          h2: { fontWeight: 'lighter', paddingBottom: 8, paddingTop: 24 },
          h3: { fontWeight: 'lighter', paddingBottom: 8, paddingTop: 24 },
        },
      },
    },
    cssVariables: { colorSchemeSelector: 'data' },
    mixins: { blur, recess, toolbar: { minHeight: TOOLBAR_HEIGHT } },
    motion: { reducedMotion: 'system' },
    typography: {
      fontFamily: 'var(--font-roboto)',
      h1: { fontSize: '3.00rem' },
      h2: { fontSize: '2.50rem' },
      h3: { fontSize: '2.00rem' },
      h4: { fontSize: '1.50rem' },
      h5: { fontSize: '1.25rem' },
      h6: { fontSize: '1.10rem' },
    },
  }),
);

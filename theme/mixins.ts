import { type CSSObject, type Theme } from '@mui/material';

const BLUR_VALUES = {
  strong: '12px',
  weak: '6px',
  weakest: '2px',
} as const satisfies Record<string, `${number}px`>;

export const blur = (level: keyof typeof BLUR_VALUES): CSSObject => ({
  backdropFilter: `blur(${BLUR_VALUES[level]})`,
  backgroundImage: 'none',
});

const RECESS_VALUES = {
  DARK: {
    X: 'inset 8px 0 8px -4px rgba(0,0,0,.5),inset -8px 0 8px -4px rgba(0,0,0,.5)',
    Y: 'inset 0 8px 8px -4px rgba(0,0,0,.5),inset 0 -8px 8px -4px rgba(0,0,0,.5)',
  },
  LIGHT: {
    X: 'inset 8px 0 8px -8px rgba(0,0,0,.2),inset -8px 0 8px -8px rgba(0,0,0,.2)',
    Y: 'inset 0 8px 8px -8px rgba(0,0,0,.2),inset 0 -8px 8px -8px rgba(0,0,0,.2)',
  },
} as const satisfies Record<string, Record<string, CSSObject['boxShadow']>>;

export const recess =
  <TTheme extends Theme>(theme: TTheme) =>
  (direction: 'X' | 'Y'): CSSObject => ({
    boxShadow: RECESS_VALUES.LIGHT[direction],
    ...theme.applyStyles('dark', { boxShadow: RECESS_VALUES.DARK[direction] }),
  });

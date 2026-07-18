import type { CSSObject } from '@mui/material';

const BLUR_VALUES = {
  strong: '12px',
  weak: '6px',
  weakest: '2px',
} as const satisfies Record<string, `${number}px`>;

export const blur = (
  level: keyof typeof BLUR_VALUES,
  /**
   * The blur strategy.
   *
   * Use `'self'` to apply the filter on the element itself, or `'backdrop'` to
   * use a backdrop filter which will blur what's _behind_ the element.
   */
  mode: 'backdrop' | 'self' = 'backdrop',
): CSSObject =>
  mode === 'self'
    ? { filter: `blur(${BLUR_VALUES[level]})` }
    : {
        backdropFilter: `blur(${BLUR_VALUES[level]})`,
        backgroundImage: 'none',
      };

const RECESS_VALUES = {
  DARK: {
    X: 'inset 8px 0 8px -4px rgba(0,0,0,.2),inset -8px 0 8px -4px rgba(0,0,0,.2)',
    Y: 'inset 0 8px 8px -4px rgba(0,0,0,.2),inset 0 -8px 8px -4px rgba(0,0,0,.2)',
  },
  LIGHT: {
    X: 'inset 8px 0 8px -8px rgba(0,0,0,.2),inset -8px 0 8px -8px rgba(0,0,0,.2)',
    Y: 'inset 0 8px 8px -8px rgba(0,0,0,.2),inset 0 -8px 8px -8px rgba(0,0,0,.2)',
  },
} as const satisfies Record<string, Record<string, CSSObject['boxShadow']>>;

export const recess = (direction: 'X' | 'Y'): CSSObject => ({
  '[data-dark] &': { boxShadow: RECESS_VALUES.DARK[direction] },
  '[data-light] &': { boxShadow: RECESS_VALUES.LIGHT[direction] },
});

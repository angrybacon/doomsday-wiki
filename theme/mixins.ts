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

const EMBOSS_VALUES = {
  diffuse: '8px',
  sharp: '4px',
} as const satisfies Record<string, `${number}px`>;

/** Increase contrast with text shadow with the provided LEVEL */
export const emboss = (level: keyof typeof EMBOSS_VALUES): CSSObject => ({
  '[data-dark] &, [data-dark]:not(html) &': {
    textShadow: `0 0 ${EMBOSS_VALUES[level]} black`,
  },
  '[data-light] &, [data-light]:not(html) &': {
    textShadow: `0 0 ${EMBOSS_VALUES[level]} white`,
  },
});

/** Apply the right frame styles depending on the provided card SET */
export const frame = (set?: string): CSSObject => ({
  borderRadius: set === 'lea' ? '7.7% / 5.5%' : '5.2% / 3.7%',
});

const RECESS_VALUES = {
  DARK: {
    X: 'inset 8px 0 8px -4px rgb(0,0,0,.2),inset -8px 0 8px -4px rgb(0,0,0,.2)',
    Y: 'inset 0 8px 8px -4px rgb(0,0,0,.2),inset 0 -8px 8px -4px rgb(0,0,0,.2)',
  },
  LIGHT: {
    X: 'inset 8px 0 8px -8px rgb(0,0,0,.2),inset -8px 0 8px -8px rgb(0,0,0,.2)',
    Y: 'inset 0 8px 8px -8px rgb(0,0,0,.2),inset 0 -8px 8px -8px rgb(0,0,0,.2)',
  },
} as const satisfies Record<string, Record<string, CSSObject['boxShadow']>>;

export const recess = (direction: 'X' | 'Y'): CSSObject => ({
  '[data-dark] &, [data-dark]:not(html) &': {
    boxShadow: RECESS_VALUES.DARK[direction],
  },
  '[data-light] &, [data-light]:not(html) &': {
    boxShadow: RECESS_VALUES.LIGHT[direction],
  },
});

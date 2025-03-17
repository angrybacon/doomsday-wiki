import { type CSSProperties } from '@mui/material/styles/createMixins';

const BLUR_VALUES = {
  strong: '12px',
  weak: '6px',
} as const satisfies Record<string, `${number}px`>;

export const blur = (level: 'strong' | 'weak'): CSSProperties => ({
  backdropFilter: `blur(${BLUR_VALUES[level]})`,
  backgroundImage: 'none',
});

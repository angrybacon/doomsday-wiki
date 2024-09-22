import { z } from 'zod';

import { CATEGORIES } from '@/tools/markdown/constants';
import { union } from '@/tools/z/union';

export const zChapter = z.preprocess(
  (value) => (typeof value === 'string' ? value.toUpperCase() : value),
  union(CATEGORIES),
);

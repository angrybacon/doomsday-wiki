import * as z from 'zod';

export type Category = z.infer<typeof CategorySchema>;

export const CategorySchema = z.preprocess(
  (it) => (typeof it === 'string' ? it.toUpperCase() : it),
  z.literal(['APPENDICES', 'DDEFT', 'DDFT', 'ENTOMBSDAY', 'MEANDECK']),
);

export const KindSchema = z.literal(['ARTICLE', 'PRIMER', 'REPORT']);

export type Kind = z.infer<typeof KindSchema>;

export const TagSchema = z.literal([
  'DDEFT',
  'DDFT',
  'LEGACY',
  'MEANDECK',
  'VINTAGE',
]);

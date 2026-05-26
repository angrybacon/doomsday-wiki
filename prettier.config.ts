import type { Config } from 'prettier';

export default {
  importOrder: [
    '<TYPES>',
    '<TYPES>^@/',
    '',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/',
    '^[.]',
  ],
  importOrderCaseSensitive: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  singleQuote: true,
} satisfies Config;

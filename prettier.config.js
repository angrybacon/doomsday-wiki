module.exports = {
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/',
    '^[.]',
  ],
  importOrderCaseSensitive: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  singleQuote: true,
};

import Js from '@eslint/js';
import PluginImport from 'eslint-plugin-import';
import Ts from 'typescript-eslint';

// NOTE Some plugins have yet to properly migrate to being compatible with the
//      flat configuration machinery. We probably want them back once they're
//      compatible again.
//
//      - eslint-plugin-jsx-a11y
//      - eslint-plugin-react
//      - eslint-plugin-react-hooks
//      - next/core-web-vitals

export default [
  ...[
    Js.configs.recommended,
    ...Ts.configs.strict,
    ...Ts.configs.stylistic,
    {
      plugins: { import: PluginImport },
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'no-console': ['error', { allow: ['error', 'warn'] }],
      },
    },
  ].map((it) => ({
    files: ['{components,hooks,pages,scryfall,theme,tools}/**/*.{ts,tsx}'],
    languageOptions: { parser: Ts.parser },
    ...it,
  })),
];

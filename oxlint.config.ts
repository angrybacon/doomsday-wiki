import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
    pedantic: 'error',
    perf: 'error',
    suspicious: 'error',
  },
  options: {
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
    typeCheck: true,
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: { 'unicorn/consistent-function-scoping': 'off' },
    },
  ],
  plugins: [
    'eslint',
    'import',
    'jsx-a11y',
    'nextjs',
    'oxc',
    'promise',
    'react',
    'react-perf',
    'typescript',
    'unicorn',
    'vitest',
  ],
  rules: {
    'eslint/max-lines-per-function': 'off',
    'eslint/no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    'eslint/no-restricted-imports': [
      'error',
      {
        message: "Use '~/tools/test' instead.",
        name: '@testing-library/react',
      },
    ],
    'import/no-unassigned-import': ['error', { allow: ['**/*.{css,d.ts}'] }],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-perf/jsx-no-jsx-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
    'typescript/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-unnecessary-condition': 'error',
    'typescript/prefer-optional-chain': 'error',
    'typescript/prefer-readonly-parameter-types': 'off',
    'typescript/strict-boolean-expressions': 'off',
    'unicorn/explicit-length-check': 'off',
    'vitest/valid-title': ['error', { ignoreTypeOfDescribeName: true }],
    // NOTE Target rules to enable as soon as they are ported and available.
    //      See <https://github.com/oxc-project/oxc/issues/1022>.
    //
    //      - react/jsx-no-leaked-render
  },
});

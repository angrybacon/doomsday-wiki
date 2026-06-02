import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
    pedantic: 'error',
    suspicious: 'error',
    perf: 'error',
  },
  options: {
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
    // NOTE This is still experimental, probably not worth removing the `tsc`
    //      step just yet.
    typeCheck: true,
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: { 'unicorn/consistent-function-scoping': 'off' },
    },
    {
      files: ['next-env.d.ts'],
      rules: { 'typescript/triple-slash-reference': 'off' },
    },
  ],
  plugins: [
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
    'eslint/no-restricted-imports': [
      'error',
      {
        message: "Use '@/tools/test' instead.",
        name: '@testing-library/react',
      },
    ],
    'import/max-dependencies': ['error', { ignoreTypeImports: true, max: 16 }],
    'import/no-unassigned-import': ['error', { allow: ['**/*.{css,d.ts}'] }],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-perf/jsx-no-jsx-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
    'typescript/ban-types': 'off',
    'typescript/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-unnecessary-condition': 'error',
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

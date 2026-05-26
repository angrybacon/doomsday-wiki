import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
    pedantic: 'error',
  },
  options: {
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
    // NOTE This is still experimental, probably not worth removing the `tsc`
    //      step just yet.
    typeCheck: true,
  },
  plugins: [
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
    'react/display-name': 'off',
    'typescript/ban-types': 'off',
    'typescript/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    'typescript/prefer-readonly-parameter-types': 'off',
    'typescript/strict-boolean-expressions': 'off',
    'unicorn/explicit-length-check': 'off',
    'vitest/valid-title': ['error', { ignoreTypeOfDescribeName: true }],
  },
});

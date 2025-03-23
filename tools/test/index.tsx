/* eslint-disable no-restricted-imports */
import { ThemeProvider } from '@mui/material';
import { render as r } from '@testing-library/react';

import { theme } from '@/theme/theme';

export const render = (...parameters: Parameters<typeof r>) => {
  const [ui, options] = parameters;
  return r(ui, {
    ...options,
    wrapper: (properties) => <ThemeProvider {...properties} theme={theme} />,
  });
};

export * from '@testing-library/react';

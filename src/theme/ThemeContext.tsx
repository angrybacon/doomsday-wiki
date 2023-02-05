import { createContext, useEffect, useMemo, useState } from 'react';
import type { FunctionComponent, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { THEME_STORAGE_KEY, Theme } from '@/theme/constants';
import { darkTheme, lightTheme } from '@/theme/theme';

interface ThemeState {
  isDark: boolean | null;
  toggle: () => void;
}

const initial: ThemeState = {
  isDark: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
};

export const ThemeContext = createContext<ThemeState>(initial);

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean | null>(initial.isDark);

  const toggle = () => {
    setIsDark((previous) => !previous);
  };

  useEffect(() => {
    if (isDark !== null) {
      const value: Theme = isDark ? Theme.DARK : Theme.LIGHT;
      window.localStorage.setItem(THEME_STORAGE_KEY, value);
    }
  }, [isDark]);

  useEffect(() => {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    setIsDark(value !== Theme.LIGHT);
  }, []);

  const value: ThemeState = useMemo(() => ({ isDark, toggle }), [isDark]);

  if (isDark === null) return null;

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

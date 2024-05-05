import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';

import { Theme, THEME_STORAGE_KEY } from '@/theme/constants';
import { darkTheme, lightTheme } from '@/theme/theme';

type ThemeState = {
  isDark: boolean | null;
  toggle: () => void;
};

const initial: ThemeState = {
  isDark: null,
  toggle: () => {},
};

export const ThemeContext = createContext<ThemeState>(initial);

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
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

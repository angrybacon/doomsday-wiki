import React, {
  FunctionComponent,
  ReactChild,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { THEME_STORAGE_KEY, Theme } from '@/theme/constants';
import { baseTheme, darkTheme, lightTheme } from '@/theme/theme';

type Toggle = () => void;

interface ThemeState {
  isDark: boolean | null;
  toggle: Toggle;
}

const initialState: ThemeState = {
  isDark: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
};

export const ThemeContext = createContext<ThemeState>(initialState);

interface Props {
  children: ReactChild | ReactChild[];
}

export const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  const toggle: Toggle = () => {
    setIsDark((previous) => !previous);
  };

  const value: ThemeState = useMemo(() => ({ isDark, toggle }), [isDark]);

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

  if (isDark === null) return null;

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <MuiThemeProvider theme={baseTheme}>{children}</MuiThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

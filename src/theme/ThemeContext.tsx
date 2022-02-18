import React, {
  FunctionComponent,
  ReactChild,
  createContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme/theme';

type Toggle = () => void;

interface ThemeState {
  isDark: boolean;
  toggle: Toggle;
}

const initialThemeState: ThemeState = {
  isDark: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
};

export const ThemeContext = createContext<ThemeState>(initialThemeState);

interface Props {
  children: ReactChild | ReactChild[];
}

export const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(initialThemeState.isDark);

  const toggle: Toggle = () => {
    setIsDark((previous) => !previous);
  };

  const value: ThemeState = useMemo(() => ({ isDark, toggle }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

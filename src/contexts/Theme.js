import React, { useEffect, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from '../theme';
import Cookie from '../tools/cookie';


export const ThemeContext = React.createContext();
export function ThemeProvider({ children }) {

  const [ dark, setDark ] = useState(!!Cookie.get(Cookie.cookies.dark));

  const onToggle = (_, checked) => {
    setDark(!!checked);
  };

  useEffect(() => {
    Cookie.set(Cookie.cookies.dark, dark, Cookie.duration.long);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{
      dark,
      onToggle,
    }}>
      <MuiThemeProvider children={children} theme={dark ? darkTheme : lightTheme} />
    </ThemeContext.Provider>
  );
}

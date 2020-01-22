import React, { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from '../theme';
import Cookie from '../tools/cookie';


export const ThemeContext = React.createContext();
export function ThemeProvider({ children }) {

  const [ dark, setDark ] = useState(!!Cookie.get(Cookie.cookies.dark));

  const onToggle = (_, checked) => {
    setDark(!!checked);
  };

  const toggle = <Switch checked={dark} onChange={onToggle} />;

  useEffect(() => {
    Cookie.set(Cookie.cookies.dark, dark, Cookie.duration.long);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{toggle}}>
      <MuiThemeProvider children={children} theme={dark ? darkTheme : lightTheme} />
    </ThemeContext.Provider>
  );
}

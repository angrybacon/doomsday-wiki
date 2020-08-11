import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from '../theme';
import { Local } from '../tools/storage';

export const ThemeContext = React.createContext();
export function ThemeProvider({ children }) {

  const [ dark, setDark ] = useState(null);

  const onToggle = (_, checked) => {
    setDark(!!checked);
  };

  useEffect(() => {
    if (dark !== null) {
      Local.set(Local.names.dark, dark);
    }
  }, [dark]);

  useEffect(() => {
    setDark(!!Local.get(Local.names.dark));
  }, []);

  return dark !== null && (
    <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{dark, onToggle}}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

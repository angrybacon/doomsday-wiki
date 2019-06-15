import React from 'react';

import { darkTheme, lightTheme } from '../theme';
import Cookie from '../tools/cookie';


const ThemeContext = React.createContext();


export class ThemeProvider extends React.Component {

  constructor(props) {
    super(props);
    const isDark = !!Cookie.get(Cookie.cookies.dark);
    this.state = {
      current: isDark ? darkTheme : lightTheme,
      isDark: isDark,
    };
  }

  toggle = (event, checked) => {
    this.setState({
      current: checked ? darkTheme : lightTheme,
      isDark: !!checked,
    }, () => Cookie.set(Cookie.cookies.dark, !!checked, Cookie.duration.long));
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Provider children={children} value={{
        state: this.state,
        toggle: this.toggle,
      }} />
    );
  }
}


export const ThemeConsumer = ThemeContext.Consumer;

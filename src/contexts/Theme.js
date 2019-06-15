import React from 'react';

import { darkTheme, lightTheme } from '../theme';


const ThemeContext = React.createContext();


export class ThemeProvider extends React.Component {

  state = {
    current: lightTheme,
    isDark: false,
  };

  toggle = (event, checked) => {
    this.setState({
      current: checked ? darkTheme : lightTheme,
      isDark: !!checked,
    });
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

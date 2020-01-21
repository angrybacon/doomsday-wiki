import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import Layout from '../Layout';
import { SidebarProvider } from '../../contexts/Sidebar';
import { ThemeConsumer, ThemeProvider } from '../../contexts/Theme';


export default function Application ({ children }) {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <ThemeConsumer>
          {({ state }) => (
            <MuiThemeProvider theme={state.current}>
              <Layout children={children} />
            </MuiThemeProvider>
          )}
        </ThemeConsumer>
      </ThemeProvider>
    </SidebarProvider>
  );
}

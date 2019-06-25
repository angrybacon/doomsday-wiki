import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';

import Layout from './Layout';
import { SidebarProvider } from '../contexts/Sidebar';
import { ThemeConsumer, ThemeProvider } from '../contexts/Theme';


class Application extends React.PureComponent {
  render() {
    return (
      <SidebarProvider>
        <ThemeProvider>
          <ThemeConsumer>
            {({state}) => (
              <MuiThemeProvider theme={state.current}>
                <Layout children={this.props.children} />
              </MuiThemeProvider>
            )}
          </ThemeConsumer>
        </ThemeProvider>
      </SidebarProvider>
    );
  }
}


export default Application;

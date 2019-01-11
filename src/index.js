import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Application from './components/Application';
import { SidebarProvider } from './contexts/Sidebar';
import { ThemeConsumer, ThemeProvider } from './contexts/Theme';

import './reset.scss';


const root = document.getElementById('root');
if (root) {
  const application = (
    <SidebarProvider>
      <ThemeProvider>
        <ThemeConsumer>
          {({state}) => <MuiThemeProvider children={<Application />} theme={state.current} />}
        </ThemeConsumer>
      </ThemeProvider>
    </SidebarProvider>
  );
  ReactDOM.render(application, root);
}

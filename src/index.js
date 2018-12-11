import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';
import { SidebarProvider } from './contexts/Sidebar';
import { ThemeProvider } from './contexts/Theme';

import './reset.scss';


const root = document.getElementById('root');
if (root) {
  const application = (
    <SidebarProvider>
      <ThemeProvider>
        <Application />
      </ThemeProvider>
    </SidebarProvider>
  );
  ReactDOM.render(application, root);
}

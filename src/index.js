import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';
import { ThemeProvider } from './contexts/Theme';

import './reset.scss';


const root = document.getElementById('root');
if (root) {
  const application = (
    <ThemeProvider>
      <Application />
    </ThemeProvider>
  );
  ReactDOM.render(application, root);
}

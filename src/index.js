import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import './reset.scss';


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Application />, root);
}

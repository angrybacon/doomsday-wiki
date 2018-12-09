import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import 'typeface-roboto';
import './styles/index.css';


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Application />, root);
}

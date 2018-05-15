import React from 'react';
import { render } from 'react-dom';

import { Application } from './components';

import 'typeface-roboto';
import './styles/index.css';

const root = document.getElementById('root');
if (root) {
  render(<Application />, root);
}

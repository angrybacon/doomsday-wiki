import React from 'react';

import Application from '../components/Application';
import Authors from '../components/Authors';


export default class AuthorsPage extends React.PureComponent {
  render() {
    return <Application children={<Authors />} />;
  }
}

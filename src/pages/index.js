import React from 'react';

import Application from '../components/Application';
import Home from '../components/Home';


export default class IndexPage extends React.PureComponent {
  render() {
    return <Application children={<Home />} />;
  }
}

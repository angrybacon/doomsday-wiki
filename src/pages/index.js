import React from 'react';

import Application from '../components/Application';
import PageHome from '../components/PageHome';


export default class Index extends React.PureComponent {
  render() {
    return <Application children={<PageHome />} />;
  }
}

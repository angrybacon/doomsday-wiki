import React from 'react';

import Application from '../components/Application';
import PageAuthors from '../components/PageAuthors';


export default class Authors extends React.PureComponent {
  render() {
    return <Application children={<PageAuthors />} />;
  }
}

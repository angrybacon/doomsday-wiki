import Paper from '@material-ui/core/Paper';
import React from 'react';

import Articles from '../Articles';
import Welcome from '../Welcome';


export default class PageHome extends React.PureComponent {
  render() {
    return (
      <>
        <Paper children={<Welcome />} />
        <Paper children={<Articles />} />
      </>
    );
  }
}

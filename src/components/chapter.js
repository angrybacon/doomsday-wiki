import React from 'react';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Page from './page';


class Chapter extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={Page} path='/chapters/:chapter/:page/' />
      </Switch>
    );
  }
}


export default Chapter;

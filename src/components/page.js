import React from 'react';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Markdown from './markdown';


class Page extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={Markdown} path="/appendices/:page/" />
        <Route component={Markdown} path="/chapters/:chapter/:page/" />
      </Switch>
    );
  }
}


export default Page;

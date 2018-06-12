import React from 'react';

import Route from 'react-router-dom/Route';

import Markdown from './markdown';


class Page extends React.Component {
  render() {
    return <Route component={Markdown} path="/archives/:chapter/:page/" />;
  }
}


export default Page;

import React from 'react';

import Paper from '@material-ui/core/Paper';

import Markdown from '../Markdown';


class Page extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <Paper children={<Markdown match={match} />} component="article" />
    );
  }
}


export default Page;

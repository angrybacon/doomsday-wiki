import React from 'react';

import Paper from '@material-ui/core/Paper';

import Markdown from '../Markdown';


class Authors extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Paper children={<Markdown source="authors/bennotsi.md" />} />
        <Paper children={<Markdown source="authors/d8dk32.md" />} />
        <Paper children={<Markdown source="authors/doishy.md" />} />
        <Paper children={<Markdown source="authors/emidln.md" />} />
        <Paper children={<Markdown source="authors/knox.md"   />} />
      </React.Fragment>
    );
  }
}


export default Authors;

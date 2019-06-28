import Paper from '@material-ui/core/Paper';
import React from 'react';

import Application from './Application';
import Markdown from './Markdown';


export default class Page extends React.PureComponent {
  render() {
    const { body } = this.props.pageContext;
    return (
      <Application>
        <Paper children={<Markdown source={body} />} />
      </Application>
    );
  }
}

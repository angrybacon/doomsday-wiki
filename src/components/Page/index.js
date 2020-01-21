import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Application from '../Application';
import Markdown from '../Markdown';


export default class Page extends React.PureComponent {
  render() {
    const { body, title } = this.props.pageContext;
    return (
      <Application>
        <Paper>
          {!!title && <Typography children={title} gutterBottom variant="h3" />}
          <Markdown source={body} />
        </Paper>
      </Application>
    );
  }
}

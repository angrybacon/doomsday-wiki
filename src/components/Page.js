import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Application from './Application';
import Markdown from './Markdown';


export default class Page extends React.PureComponent {
  render() {
    const { body, title } = this.props.pageContext;
    return (
      <Application>
        <Paper>
          {!!title && (
            <>
              <Typography children={title} variant="h3" />
              <Box children={<Divider />} my={3} />
            </>
          )}
          <Markdown source={body} />
        </Paper>
      </Application>
    );
  }
}

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Application from '../Application';
import Markdown from '../Markdown';


export default function Page({ pageContext }) {
  const { body, title } = pageContext;
  return (
    <Application>
      <Paper>
        {!!title && <Typography children={title} gutterBottom variant="h3" />}
        <Markdown source={body} />
      </Paper>
    </Application>
  );
}

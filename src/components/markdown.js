import React from 'react';

import { Grid, Typography } from 'material-ui';
import ReactMarkdown from 'react-markdown';

import content from '../pages/example.md';

function getHeading(level) {
  const defaultVariant = 'display1';
  return {1: 'display2', 2: 'display1'}[level] || defaultVariant;
}

class Markdown extends React.Component {
  render() {

    const renderers = {
      heading: props => <Typography gutterBottom variant={getHeading(props.level)}>{props.children}</Typography>,
      paragraph: props => <Typography paragraph>{props.children}</Typography>
    };

    return (
      <Grid container justify="center">
        <Grid item xs={9}>
          <ReactMarkdown renderers={renderers} source={content} />
        </Grid>
      </Grid>
    );
  }
}

export default Markdown;

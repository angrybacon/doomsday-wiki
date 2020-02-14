import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Markdown from '../Markdown';
import Paper from '../Paper';


export default function Page({ pageContext }) {
  const { body, title } = pageContext;
  return (
    <Paper>
      {!!title && <Typography children={title} gutterBottom variant="h3" />}
      <Markdown barf source={body} />
    </Paper>
  );
}


Page.propTypes = {
  pageContext: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
};

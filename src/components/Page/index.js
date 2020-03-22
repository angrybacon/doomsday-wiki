import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Listify from '../Listify';
import Markdown from '../Markdown';
import Paper from '../Paper';


export default function Page({ pageContext }) {
  const { authors, body, date, title } = pageContext;
  const subtitle = !!(date || authors) && (
    <Listify justifyContent="center" items={[date, authors].filter(it => it)} />
  );
  return (
    <Paper>
      {!!(subtitle || title) && (
        <Typography component="div" gutterBottom variant="h3">
          {!!title && <Typography children={title} variant="h3" />}
          {!!subtitle && (
            <Typography align="center" children={subtitle} gutterBottom variant="subtitle1" />
          )}
        </Typography>
      )}
      <Markdown barf source={body} />
    </Paper>
  );
}


Page.propTypes = {
  pageContext: PropTypes.shape({
    authors: PropTypes.string,
    body: PropTypes.string.isRequired,
    date: PropTypes.string,
    title: PropTypes.string,
  }),
};

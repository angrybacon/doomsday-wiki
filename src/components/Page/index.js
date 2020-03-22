import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Listify from '../Listify';
import Markdown from '../Markdown';
import Paper from '../Paper';


export default function Page({ pageContext }) {
  const { authors, body, date, title, type } = pageContext;
  const subtitle = <Listify justifyContent="center" items={[date, authors]} />;
  const primary = !!title && <Typography align="center" children={title} variant="h3" />;
  const isArticle = type === 'articles';
  return (
    <Paper>
      <Typography component="div" gutterBottom variant="h3">
        {primary}
        {isArticle && (
          <Typography align="center" children={subtitle} color="textSecondary" variant="subtitle1" />
        )}
      </Typography>
      <Markdown barf source={body} />
      {!isArticle && (
        <Typography align="center"
                    children={subtitle}
                    color="textSecondary"
                    component="div"
                    gutterBottom
                    variant="body2" />
      )}
    </Paper>
  );
}


Page.propTypes = {
  pageContext: PropTypes.shape({
    authors: PropTypes.string,
    body: PropTypes.string.isRequired,
    date: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

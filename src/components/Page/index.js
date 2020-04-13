import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Listify from '../Listify';
import Markdown from '../Markdown';
import Paper from '../Paper';


export default function Page({ pageContext }) {
  const { authors, body, date, title, type } = pageContext;
  const credit = [date, authors].filter(it => it);
  const subtitle = credit.length ? <Listify justifyContent="center" items={credit} /> : null;
  const primary = !!title && <Typography align="center" children={title} variant="h3" />;
  const isArticle = type === 'articles';
  return (
    <Paper>
      <Typography component="div" gutterBottom variant="h3">
        {primary}
        {isArticle && subtitle && (
          <Typography align="center" children={subtitle} color="textSecondary" variant="subtitle1" />
        )}
      </Typography>
      <Markdown source={body} />
      {!isArticle && subtitle && (
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

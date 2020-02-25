import c from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';


export default function Decklist({ className, hr, path }) {

  const classes = useStyles();
  const { decks } = useStaticQuery(graphql`{
    decks: allDeck {
      edges {
        node {
          main
          relativePath
          side
        }
      }
    }
  }`);
  const node = decks.edges.find(({ node }) => node.relativePath === path);
  const { main, relativePath, side } = node && node.node || {main: [], side: []};

  const row = ([ amount, card], index) => (
    <Typography children={`${amount} ${card}`} component="li" key={index} />
  );

  return (!!main.length || !!side.length) && (
    <div className={c(classes.root, className)}>
      {!!hr && <Divider />}
      <div className={classes.content}>
        {relativePath && <Typography children={relativePath} gutterBottom variant="h5" />}
        <Grid container>
          {!!main.length && (
            <Grid item xs={12} sm={6} md={8}>
              <Typography children="Maindeck" gutterBottom variant="h6" />
              {main.map((it, index) => <List children={it.map(row)} disablePadding key={index} />)}
            </Grid>
          )}
          {!!side.length && (
            <Grid item xs={12} sm={6} md={4}>
              <Typography children="Sideboard" gutterBottom variant="h6" />
              {side.map((it, index) => <List children={it.map(row)} disablePadding key={index} />)}
            </Grid>
          )}
        </Grid>
      </div>
      {!!hr && <Divider />}
    </div>
  ) || <pre children={`Deck: ${path}`} />;
}


Decklist.propTypes = {
  hr: true,
};


Decklist.propTypes = {
  className: PropTypes.string,
  hr: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

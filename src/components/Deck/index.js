import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Collapsible from '../Collapsible';


export default function Decklist({ collapsible, path, ...rest }) {

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
  const { main, side } = node && node.node || {main: [], side: []};

  const row = ([ amount, card], index) => (
    <Typography children={`${amount} ${card}`} component="li" key={index} />
  );

  const wrapper = collapsible ? Collapsible : 'div';
  const title = <>Decklist: <Typography children={path} color="textSecondary" component="span" /></>;
  const deck = (!!main.length || !!side.length) && (
    <Box bgcolor="background.secondary">
      <Box p={2}>
        {!collapsible && path && <Typography children={path} gutterBottom variant="h5" />}
        <Grid container spacing={2}>
          {!!main.length && (
            <Grid item xs={12} sm={8}>
              <Typography children="Maindeck" gutterBottom variant="h6" />
              <Box display="flex" mx={-2}>
                {main.map((it, index) => (
                  <Box children={<List children={it.map(row)} disablePadding />} key={index} mx={2} />
                ))}
              </Box>
            </Grid>
          )}
          {!!side.length && (
            <Grid item xs={12} sm={4}>
              <Typography children="Sideboard" gutterBottom variant="h6" />
              {side.map((it, index) => <List children={it.map(row)} disablePadding key={index} />)}
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );

  return React.createElement(wrapper, {...(collapsible && {title, zoom: true}), ...rest}, deck);
}


Decklist.propTypes = {
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

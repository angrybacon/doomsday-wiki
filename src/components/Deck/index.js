import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
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
    <Typography key={index} component="li">{amount} {card}</Typography>
  );

  const Wrapper = collapsible ? Collapsible : 'div';
  const title = (
    <>
      {'Decklist: '}
      <Typography color="textSecondary" component="span">{path}</Typography>
    </>
  );
  const deck = (!!main.length || !!side.length) && (
    <Box bgcolor="background.secondary">
      <Box p={2}>
        {!collapsible && path && <Typography gutterBottom variant="h5">{path}</Typography>}
        <Grid container spacing={2}>
          {!!main.length && (
            <Grid item sm={8} xs={12}>
              <Typography gutterBottom variant="h6">Maindeck</Typography>
              <Box display="flex" mx={-2}>
                {main.map((it, index) => (
                  <Box key={index} mx={2}>
                    <List disablePadding>{it.map(row)}</List>
                  </Box>
                ))}
              </Box>
            </Grid>
          )}
          {!!side.length && (
            <Grid item sm={4} xs={12}>
              <Typography gutterBottom variant="h6">Sideboard</Typography>
              {side.map((it, index) => (
                <List key={index} disablePadding>{it.map(row)}</List>
              ))}
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Wrapper {...{...(collapsible && {title, zoom: true}), ...rest}}>{deck}</Wrapper>
  );
}

Decklist.propTypes = {
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

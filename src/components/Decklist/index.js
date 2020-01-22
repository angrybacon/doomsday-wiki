import c from 'classnames';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';


// This class gets a decklist name from its props, loads up all the decks from
// the 'decklists' folder, and displays the one with the name it was given.


export default function Decklist({ className, deckFile, hr=true }) {

  const classes = useStyles();
  const { main, name, side } = require('../../../decklists/' + deckFile);

  return (
    <div className={c(classes.root, className)}>
      {!!hr && <Divider />}
      <div className={classes.content}>
        <Typography children={name} paragraph variant="h5" />
        <Grid container>
          <Grid item xs={12} sm={6} md={8}>
            <Typography children="Maindeck" gutterBottom variant="h6" />
            <List disablePadding>
              {Object.entries(main).map(([ card, amount ], index) => (
                <Typography children={`${amount} ${card}`} component="li" key={index} />
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography children="Sideboard" gutterBottom variant="h6" />
            <List disablePadding>
              {Object.entries(side).map(([ card, amount ], index) => (
                <Typography children={`${amount} ${card}`} component="li" key={index} />
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
      {!!hr && <Divider />}
    </div>
  );
}

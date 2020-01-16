import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


// This class gets a decklist name from its props, loads up all the decks from
// the 'decklists' folder, and displays the one with the name it was given.


export default class Decklist extends React.PureComponent {
  render() {

    const { deckFile } = this.props;

    const deckData = require('../../decklists/' + deckFile);
    let mainKeys = Object.keys(deckData.main);
    let midpoint = Math.floor(mainKeys.length / 2);
    let mainHalf1 = mainKeys.slice(0, midpoint);
    let mainHalf2 = mainKeys.slice(midpoint, mainKeys.length);

    return (
      <div style={{background: 'whitesmoke', padding: 15, width: '90%'}}>
        <Typography children={deckData.name} variant="h5" />
        <hr />
        <Grid container alignItems="flex-start" spacing={3}>
          <Grid item xs zeroMinWidth>
            <div>
              <Typography children="Maindeck" variant="h5" />
              <List>
                {mainHalf1.map( (it, index) => (
                  <Typography key={index} noWrap >{deckData.main[it]} {it}</Typography>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item xs zeroMinWidth>
            <div>
              <List>
                {mainHalf2.map((it, index) => (
                  <Typography key={index} noWrap>{deckData.main[it]} {it}</Typography>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item xs zeroMinWidth>
            <div>
              <Typography children="Sideboard" variant="h5" />
              <List>
                {Object.keys(deckData.side).map((it, index) => (
                  <Typography key={index} noWrap>{deckData.side[it]} {it}</Typography>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
        <hr/>
      </div>
    );
  }
}

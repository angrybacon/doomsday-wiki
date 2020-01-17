import c from 'classnames';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';


// This class gets a decklist name from its props, loads up all the decks from
// the 'decklists' folder, and displays the one with the name it was given.


const styles = theme => ({
  barf: {
    marginLeft: -theme.overrides.MuiPaper.root.padding,
    marginRight: -theme.overrides.MuiPaper.root.padding,
  },
  content: {
    padding: [[theme.spacing(1), theme.overrides.MuiPaper.root.padding]],
  },
  root: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  },
});


class Decklist extends React.PureComponent {
  render() {

    const { classes, barf, deckFile, hr=true } = this.props;
    const { main, name, side } = require('../../decklists/' + deckFile);

    return (
      <div className={c(classes.root, {[classes.barf]: barf})}>
        {!!hr && <Divider />}
        <div className={classes.content}>
          <Typography children={name} paragraph variant="h5" />
          <Grid container>
            <Grid item xs={12} sm={6} md={8}>
              <Typography children="Maindeck" variant="h6" />
              <List>
                {Object.entries(main).map(([ card, amount ], index) => (
                  <Typography children={`${amount} ${card}`} component="li" key={index} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography children="Sideboard" variant="h6" />
              <List>
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
}


export default withStyles(styles)(Decklist);

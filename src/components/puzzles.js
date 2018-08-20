import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import PrettyLink from './prettylink';
import { PUZZLES } from '../menu';


const styles = theme => ({
  paper: theme.mixins.padding(),
});


class Puzzles extends React.Component {
  render() {
    const { classes, match } = this.props;
    const puzzles = (PUZZLES.find(it => it.href === match.url) || {routes: []}).routes.map(
      route => <li key={route.href}><PrettyLink children={route.text} href={route.href} /></li>
    );
    return (
      <Paper className={classes.paper} component="article">
        <Typography children={puzzles} component="ul" />
      </Paper>
    );
  }
}


export default withStyles(styles)(Puzzles);

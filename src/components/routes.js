import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Markdown from './markdown';
import Page from './page';


const styles = theme => ({
  padding: theme.mixins.padding({y: true}),
});


class Routes extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Switch>
        <Route path="/" exact>
          <Grid container direction="column" wrap="nowrap">
            <Grid item>
              <Paper className={classes.padding} component="article">
                <Markdown source="home.md" />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.padding} component="article">
                <Markdown source="articles.md" />
              </Paper>
            </Grid>
          </Grid>
        </Route>
        <Route>
          <Paper children={<Page />} className={classes.padding} component="article" />
        </Route>
      </Switch>
    );
  }
}


export default withStyles(styles)(Routes);

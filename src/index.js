import React from 'react';
import { render } from 'react-dom';

import { Grid, Paper, withStyles } from 'material-ui';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header, Page } from './components';

import 'typeface-roboto';
import './styles/index.css';

const styles = theme => ({
  root: {
    flexShrink: 1,
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  }
});

const Application = withStyles(styles)(function(props) {

  const { classes } = props;

  return (
    <Router>
      <Grid container direction="column" spacing={0} style={{minWidth: 400}} wrap="nowrap">
        <Grid item children={<Header />} component="header" />
        <Grid item className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={7} lg={6} xl={5}>
              <Route exact path="/" render={() => <Page source="home.md" />} />
              <Route exact path="/articles/" render={() => <Page source="articles.md" />} />
              <Route exact path="/puzzles/" render={() => <Page source="puzzles.md" />} />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={2} xl={2} component="aside">
              <Page source="sidebar.md" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
});

const root = document.getElementById('root');
if (root) {
  render(<Application />, root);
}

import React from 'react';
import { render } from 'react-dom';

import { Grid, withStyles } from 'material-ui';
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
          <Route exact path="/" render={() => <Page source="home.md" />} />
          <Route exact path="/articles/" render={() => <Page source="articles.md" />} />
          <Route exact path="/puzzles/" render={() => <Page source="puzzles.md" />} />
        </Grid>
      </Grid>
    </Router>
  );
});

const root = document.getElementById('root');
if (root) {
  render(<Application />, root);
}

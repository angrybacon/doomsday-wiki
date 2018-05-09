import React from 'react';
import { render } from 'react-dom';

import { Grid, MuiThemeProvider, Paper, createMuiTheme, withStyles } from 'material-ui';
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
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3,
    },
  }
});

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiPaper: {root: {
      padding: defaultTheme.spacing.unit * 3,
      [defaultTheme.breakpoints.up('sm')]: {
        padding: defaultTheme.spacing.unit * 4,
      },
    }},
  },
});

const Application = withStyles(styles)(function(props) {

  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Grid container direction="column" spacing={0} style={{minWidth: 400}} wrap="nowrap">
          <Grid item children={<Header />} component="header" />
          <Grid item className={classes.root}>
            <Grid container justify="center">
              <Grid item xs={12} sm={8} md={7} lg={6} xl={5}>
                <Paper>
                  <Route exact path="/" render={() => <Page source="home.md" />} />
                  <Route exact path="/articles/" render={() => <Page source="articles.md" />} />
                  <Route exact path="/puzzles/" render={() => <Page source="puzzles.md" />} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={2} xl={2} component="aside">
                <Paper children={<Page source="sidebar.md" />} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </MuiThemeProvider>
  );
});

const root = document.getElementById('root');
if (root) {
  render(<Application />, root);
}

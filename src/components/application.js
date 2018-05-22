import React from 'react';

import { createMuiTheme, Grid, MuiThemeProvider, Paper, Typography, withStyles } from 'material-ui';
import { blueGrey, pink } from 'material-ui/colors';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header, Page } from '.';

const styles = theme => ({
  root: {
    backgroundColor: blueGrey[50],
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

const theme = {
  overrides: {
    MuiPaper: {
      root: {
        padding: defaultTheme.spacing.unit * 3,
        [defaultTheme.breakpoints.up('sm')]: {
          padding: defaultTheme.spacing.unit * 4,
        },
      }
    },
  },
};

const lightTheme = createMuiTheme(Object.assign({}, theme, {palette: {
  primary: {main: blueGrey[800]},
  secondary: pink,
}}));

const darkTheme = createMuiTheme(Object.assign({}, theme, {palette: {
  primary: {main: blueGrey[800]},
  secondary: pink,
  type: 'dark',
}}));

class Application extends React.Component {

  state = {theme: lightTheme};

  changeTheme = () => (event, checked) => {
    this.setState({theme: checked ? darkTheme : lightTheme});
  }

  render() {
    const { classes } = this.props;
    let { theme } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Grid container direction="column" spacing={0} style={{minWidth: 400}} wrap="nowrap">
            <Grid item children={<Header changeTheme={this.changeTheme} />} component="header" />
            <Grid item className={classes.root}>
              <Grid container justify="center">
                <Grid item xs={12} sm={8} md={7} lg={6} xl={5}>
                  <Paper component="article">
                    <Route exact path="/" render={() => <Page source="home.md" />} />
                    <Route exact path="/articles/" render={() => <Page source="articles.md" />} />
                    <Route exact path="/puzzles/" render={() => <Page source="puzzles.md" />} />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2} xl={2} component="aside">
                  <Paper children={<Page className="sidebar" source="sidebar.md" />} />
                </Grid>
              </Grid>
              <Typography align="center"
                          children="Copyright &copy; 2018 ddft.wiki contributors"
                          component="footer"
                          style={{marginTop: 20}} />
            </Grid>
          </Grid>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Application);

import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

import Header from './header';
import Page from './page';


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
    const routes = [
      {path: '/',           source: 'home.md'},
      {path: '/articles/',  source: 'articles.md'},
      {path: '/puzzles/',   source: 'puzzles.md'},
    ].map(it => <Route exact key={it.path} path={it.path} render={() => <Page source={it.source} />} />);
    let { theme } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Grid
            container
            direction="column"
            style={{backgroundColor: theme.palette.background.default, minWidth: 400}}
            wrap="nowrap">
            <Grid item children={<Header changeTheme={this.changeTheme} />} component="header" />
            <Grid item className={classes.root}>
              <Grid container justify="center" spacing={16}>
                <Grid item xs={12} sm={8} md={7} lg={6} xl={5}>
                  <Paper component="article" children={routes} />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
                  <Grid container direction="column" spacing={16}>
                    <Grid item children={<Paper children={<Page source="links.md" />} component="aside" />} />
                    <Grid item>
                      <Paper children={<Page source="notation.md" />} component="aside" style={{padding: 0}} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Typography align="center" component="footer" style={{marginTop: 20}}>
                Copyright &copy; 2018 ddft.wiki contributors
              </Typography>
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Application);

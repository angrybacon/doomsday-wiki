import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Chapter from './chapter';
import Sidebar from './sidebar';
import Header from './header';
import Page from './page';


const sidebarWidth = 300;
const styles = theme => ({
  body: {
    flexShrink: 1,
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {padding: theme.spacing.unit * 2},
    [theme.breakpoints.up('md')]: {padding: theme.spacing.unit * 3},
  },
  root: {
    [theme.breakpoints.up('md')]: {
      marginLeft: sidebarWidth,
      width: `calc(100% - ${sidebarWidth}px)`,
    },
  },
  sidebar: {
    width: sidebarWidth,
  },
});

const defaultTheme = createMuiTheme();

const theme = {
  overrides: {
    MuiPaper: {
      root: {
        padding: defaultTheme.spacing.unit * 3,
        [defaultTheme.breakpoints.up('sm')]: {padding: defaultTheme.spacing.unit * 4},
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

  state = {drawer: false, theme: lightTheme};

  changeTheme = () => (event, checked) => {
    this.setState({theme: checked ? darkTheme : lightTheme});
  };

  toggleDrawer = () => {
    this.setState({drawer: !this.state.drawer});
  };

  render() {

    const { classes } = this.props;
    const routes = [
      {path: '/',           exact: true,  component: [<Page source="home.md" />]},
      {path: '/archives/',  exact: true,  component: [<Page source="articles.md" />, <Chapter />]},
      {path: '/archives/',                component: [<Chapter />]},
      {path: '/puzzles/',   exact: true,  component: [<Page source="puzzles.md" />]},
    ].map((it, index) => <Route exact={it.exact} key={index} path={it.path} render={
      () => <Grid container children={it.component.map(
        (it, index) => <Grid item children={<Paper children={it} component="article" />} key={index} />
      )} direction="column" spacing={16} />
    } />);

    return (
      <MuiThemeProvider theme={this.state.theme}>
        <BrowserRouter>
          <div style={{backgroundColor: this.state.theme.palette.background.default, minWidth: 320}}>
            <Hidden mdUp>
              <Sidebar open={this.state.drawer} onClose={this.toggleDrawer} variant="temporary" />
            </Hidden>
            <Hidden smDown>
              <Sidebar classes={{paper: classes.sidebar}} implementation="css" variant="permanent" />
            </Hidden>
            <Grid container className={classes.root} direction="column">
              <Grid item>
                <Header changeTheme={this.changeTheme}
                        className={classes.header}
                        component="header"
                        toggleDrawer={this.toggleDrawer} />
              </Grid>
              <Grid item className={classes.body}>
                <Grid container alignItems="center">
                  <Grid item xs={12}>
                    <Switch children={routes} />
                    <Typography align="center" component="footer" style={{marginTop: 20}}>
                      Copyright &copy; 2018 ddft.wiki contributors
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}


export default withStyles(styles)(Application);

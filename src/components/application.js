import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import BrowserRouter from 'react-router-dom/BrowserRouter';

import Header from './header';
import Routes from './routes';
import Sidebar from './sidebar';


const sidebarWidth = 300;
const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {padding: theme.spacing.unit * 2},
    [theme.breakpoints.up('md')]: {padding: theme.spacing.unit * 3},
  },
  root: {
    height: '100%',
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
        marginBottom: defaultTheme.spacing.unit * 2,
        padding: defaultTheme.spacing.unit * 3,
        [defaultTheme.breakpoints.up('sm')]: {padding: defaultTheme.spacing.unit * 4},
        [defaultTheme.breakpoints.up('md')]: {marginBottom: defaultTheme.spacing.unit * 3},
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
    this.setState(state => ({drawer: !state.drawer}));
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <BrowserRouter>
          <div style={{
                 backgroundColor: this.state.theme.palette.background.default,
                 minWidth: 320,
               }}>
            <Hidden mdUp>
              <Sidebar changeTheme={this.changeTheme}
                       component={SwipeableDrawer}
                       drawerProps={{
                         open: this.state.drawer,
                         onClose: this.toggleDrawer,
                         onOpen: this.toggleDrawer,
                       }} />
            </Hidden>
            <Hidden smDown>
              <Sidebar changeTheme={this.changeTheme}
                       drawerProps={{
                         classes: {paper: classes.sidebar},
                         implementation: 'css',
                         variant: 'permanent',
                       }} />
            </Hidden>
            <Grid container className={classes.root} direction="column" wrap="nowrap">
              <Grid item>
                <Header component="header" toggleDrawer={this.toggleDrawer} />
              </Grid>
              <Grid item className={classes.body}>
                <Grid container justify="center">
                  <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Routes />
                    <Typography align="center" component="footer">
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

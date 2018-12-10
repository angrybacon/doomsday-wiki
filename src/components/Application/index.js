import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import BrowserRouter from 'react-router-dom/BrowserRouter';

import Header from '../Header';
import Prettylink from '../Prettylink';
import Routes from '../Routes';
import Sidebar from '../Sidebar';
import { ThemeConsumer } from '../../contexts/Theme';


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


class Application extends React.PureComponent {

  state = {drawer: false};

  toggleDrawer = () => {
    this.setState(state => ({drawer: !state.drawer}));
  };

  render() {
    const { classes } = this.props;
    return (
      <ThemeConsumer>
        {theme => (
          <MuiThemeProvider theme={theme.state.current}>
            <BrowserRouter>
              <div style={{
                backgroundColor: theme.state.current.palette.background.default,
                minWidth: 320,
              }}>
                <Hidden mdUp>
                  <Sidebar component={SwipeableDrawer}
                           drawerProps={{
                             open: this.state.drawer,
                             onClose: this.toggleDrawer,
                             onOpen: this.toggleDrawer,
                           }}
                           toggleDrawer={this.toggleDrawer} />
                </Hidden>
                <Hidden smDown>
                  <Sidebar drawerProps={{
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
                          Copyright &copy; 2018
                          <Prettylink children="ddft.wiki contributors" href="/authors/" />
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        )}
      </ThemeConsumer>
    );
  }
}


export default withStyles(styles)(Application);

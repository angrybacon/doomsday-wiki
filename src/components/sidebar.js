import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Page from './page';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  title: theme.mixins.toolbar,
});


class Sidebar extends React.Component {
  render() {

    const { classes, changeTheme, component, drawerProps } = this.props;
    const children = (
      <Grid container direction="column" wrap="nowrap">
        <Hidden smDown>
          <Grid item>
            <Toolbar>
              <Grid container alignItems="center" className={classes.title} justify="space-between">
                <Grid item children={<Typography children="ddft.wiki" variant="title" />} />
                <Switch onChange={changeTheme()} />
              </Grid>
            </Toolbar>
          </Grid>
          <Divider />
        </Hidden>
        <Grid item className={classes.body}>
          <Paper children={<Page source="links.md" />} elevation={0} style={{marginBottom: 0}} />
          <Divider />
          <Page source="notation.md" />
        </Grid>
      </Grid>
    );

    return React.createElement(
      component ? component : Drawer,
      // NOTE: Style is currently being overwritten by SwipeableDrawer.
      //       https://github.com/mui-org/material-ui/issues/11799
      {PaperProps: {style: {padding: 0}}, ...drawerProps},
      children,
    );
  }
}


export default withStyles(styles)(Sidebar);

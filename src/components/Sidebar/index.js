import React from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link';

import Markdown from '../Markdown';
import SidebarMenu from '../SidebarMenu';
import { ThemeConsumer } from '../../contexts/Theme';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  padding: {padding: theme.spacing.unit * 3},
  title: theme.mixins.toolbar,
});


class Sidebar extends React.PureComponent {

  state = {menuItems: {}};

  toggleMenuItem = index => () => {
    this.setState(state => ({menuItems: {...state.menuItems, [index]: !state.menuItems[index]}}));
  };

  render() {
    const { classes, component, drawerProps, toggleDrawer, width } = this.props;
    const drawer = (
      <ThemeConsumer>
        {theme => (
          <Grid container direction="column" wrap="nowrap">
            <Grid item>
              <Toolbar>
                <Grid container alignItems="center" className={classes.title} justify="space-between">
                  <Grid item>
                    <Link style={{textDecoration: 'none'}} to="/">
                      <Button children="ddft.wiki"
                              color="primary"
                              onClick={toggleDrawer}
                              size={isWidthDown('sm', width) ? 'small' : 'medium'}
                              style={{boxShadow: 'none'}}
                              variant="contained"/>
                    </Link>
                  </Grid>
                  <Switch checked={theme.state.isDark} onChange={theme.toggle} />
                </Grid>
              </Toolbar>
            </Grid>
            <Divider />
            <Grid item className={classes.body}>
              <SidebarMenu menuItems={this.state.menuItems}
                           toggleDrawer={toggleDrawer}
                           toggleMenuItem={this.toggleMenuItem} />
              <Divider />
              <Markdown source="notation.md" tableCellProps={{padding: 'dense'}} />
              <Markdown className={classes.padding} noPadding source="links.md" />
            </Grid>
          </Grid>
        )}
      </ThemeConsumer>
    );

    return React.createElement(
      component ? component : Drawer,
      // NOTE: Style is currently being overwritten by SwipeableDrawer.
      //       https://github.com/mui-org/material-ui/issues/11799
      {PaperProps: {style: {padding: 0}}, ...drawerProps},
      drawer,
    );
  }
}


export default withWidth()(withStyles(styles)(Sidebar));

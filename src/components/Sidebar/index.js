import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import Markdown from '../Markdown';
import SidebarHeader from '../SidebarHeader';
import SidebarMenu from '../SidebarMenu';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  title: theme.mixins.toolbar,
});


class Sidebar extends React.PureComponent {

  state = {menuItems: {}};

  toggleMenuItem = index => () => {
    this.setState(state => ({menuItems: {...state.menuItems, [index]: !state.menuItems[index]}}));
  };

  render() {
    const { classes, component, drawerProps, toggleDrawer } = this.props;
    const drawer = (
      <Grid container direction="column" wrap="nowrap">
        <Grid item children={<SidebarHeader />} />
        <Divider />
        <Grid item className={classes.body}>
          <SidebarMenu menuItems={this.state.menuItems}
                       toggleDrawer={toggleDrawer}
                       toggleMenuItem={this.toggleMenuItem} />
          <Divider />
          <Markdown source="notation.md" tableCellProps={{padding: 'dense'}} />
          <Markdown source="links.md" />
        </Grid>
      </Grid>
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


export default withStyles(styles)(Sidebar);

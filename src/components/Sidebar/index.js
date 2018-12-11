import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import Markdown from '../Markdown';
import SidebarHeader from '../SidebarHeader';
import SidebarMenu from '../SidebarMenu';
import { SidebarConsumer } from '../../contexts/Sidebar';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
});


class Sidebar extends React.PureComponent {
  render() {
    const { classes, sidebarProps, sidebarTreshold, width } = this.props;
    const content = (
      <Grid container direction="column" wrap="nowrap">
        <Grid item children={<SidebarHeader size={isWidthDown(sidebarTreshold, width) ? 'small' : 'medium'} />} />
        <Divider />
        <Grid item className={classes.body}>
          <SidebarMenu />
          <Divider />
          <Markdown source="notation.md" tableCellProps={{padding: 'dense'}} />
          <Markdown source="links.md" />
        </Grid>
      </Grid>
    );
    const isMobile = isWidthDown(sidebarTreshold, width);
    const drawer = (
      <SidebarConsumer>
        {({state, toggleDrawer}) => (
          <SwipeableDrawer children={content}
                           onClose={toggleDrawer(false)}
                           onOpen={toggleDrawer(true)}
                           open={state.drawerIsOpen} />
        )}
      </SidebarConsumer>
    );
    const sidebar = <Drawer {...sidebarProps} children={content} variant="permanent" />;
    return isMobile ? drawer : sidebar;
  }
}


export default withWidth()(withStyles(styles)(Sidebar));

import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
// import Link from 'react-router-dom/Link';

import { SidebarConsumer } from '../contexts/Sidebar';
import { ThemeConsumer } from '../contexts/Theme';


const styles = theme => ({
  root: theme.mixins.toolbar,
});


class SidebarHeader extends React.PureComponent {
  render() {
    const { classes, size } = this.props;
    return (
      <Toolbar>
        <Grid container alignItems="center" className={classes.root} justify="space-between">
          <Grid item>
            {/* <Link style={{textDecoration: 'none'}} to="/"> */}
            <SidebarConsumer>
              {({toggleDrawer}) => (
                <Button children="ddft.wiki"
                        color="primary"
                        onClick={toggleDrawer(false)}
                        size={size}
                        style={{boxShadow: 'none'}}
                        variant="contained"/>
              )}
            </SidebarConsumer>
            {/* </Link> */}
          </Grid>
          <ThemeConsumer>
            {theme => <Switch checked={theme.state.isDark} onChange={theme.toggle} />}
          </ThemeConsumer>
        </Grid>
      </Toolbar>
    );
  }
}


export default withStyles(styles)(SidebarHeader);

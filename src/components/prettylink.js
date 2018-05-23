import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  root: {color: theme.palette.secondary[{dark: 'light', light: 'dark'}[theme.palette.type]]},
});


class PrettyLink extends React.Component {
  render() {
    const { children, classes, href, target } = this.props;
    return <a className={classes.root} href={href} target={target}>{children}</a>;
  }
}


export default withStyles(styles)(PrettyLink);

import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import OpenInNew from 'mdi-material-ui/OpenInNew';


const styles = theme => ({
  root: {color: theme.palette.secondary[{dark: 'light', light: 'dark'}[theme.palette.type]]},
});


class PrettyLink extends React.Component {
  render() {
    const { children, classes, component, href, target, theme} = this.props;
    return component ?
      React.createElement(component, {className: classes.root, to: href}, children) : (
        <span style={{alignItems: 'center', display: 'inline-flex'}}>
          <a className={classes.root} href={href} target={target || '_blank'}>{children}</a>
          <OpenInNew style={{fontSize: theme.typography.body1.fontSize, marginLeft: 4}} />
        </span>
      );
  }
}


export default withStyles(styles, {withTheme: true})(PrettyLink);

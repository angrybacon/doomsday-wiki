import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import OpenInNew from 'mdi-material-ui/OpenInNew';

import Link from 'react-router-dom/Link';


const styles = theme => ({
  root: {color: theme.palette.secondary[{dark: 'light', light: 'dark'}[theme.palette.type]]},
});


class PrettyLink extends React.Component {
  render() {
    const { children, classes, href, target, theme} = this.props;
    const component = this.props.component || (href && href.startsWith('http') ? null : Link);

    return href ? (
      component ?
        React.createElement(component, {className: classes.root, to: href}, children) : (
          <span style={{alignItems: 'center', display: 'inline-flex'}}>
            <a className={classes.root} href={href} target={target || '_blank'}>{children}</a>
            <OpenInNew style={{fontSize: theme.typography.body1.fontSize, marginLeft: 4}} />
          </span>
        )
    ) : <span>{children}</span>;
  }
}


export default withStyles(styles, {withTheme: true})(PrettyLink);

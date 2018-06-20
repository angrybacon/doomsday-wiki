import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import OpenInNew from 'mdi-material-ui/OpenInNew';

import Link from 'react-router-dom/Link';


const styles = theme => ({
  externalIcon: {
    fontSize: theme.typography.body1.fontSize,
    marginLeft: '.25em',
  },
  externalWrapper: {
    alignItems: 'center',
    display: 'inline-flex',
  },
  root: {color: theme.palette.secondary[{dark: 'light', light: 'dark'}[theme.palette.type]]},
});


class PrettyLink extends React.Component {
  render() {
    const { children, classes, href, target} = this.props;
    const component = this.props.component || (href && href.startsWith('http') ? null : Link);
    return href ? (
      component ? React.createElement(component, {className: classes.root, to: href}, children) : (
        <span className={classes.externalWrapper}>
          <a className={classes.root} href={href} target={target || '_blank'}>{children}</a>
          <OpenInNew className={classes.externalIcon} />
        </span>
      )
    ) : <span {...this.props}>{children}</span>;
  }
}


export default withStyles(styles, {withTheme: true})(PrettyLink);

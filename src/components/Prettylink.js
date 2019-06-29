import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
// import Link from 'react-router-dom/Link';


const styles = theme => ({
  icon: {
    marginLeft: '.25em',
  },
  link: {
    color: theme.palette.secondary[{dark: 'light', light: 'dark'}[theme.palette.type]]
  },
  root: {
    alignItems: 'center',
    display: 'inline-flex',
  },
});


class Prettylink extends React.PureComponent {
  render() {
    const { children, classes, href, target='_blank' } = this.props;
    const component = this.props.component || (href && href.startsWith('http') ? null : "a");
    return href ? (
      component ? React.createElement(component, {className: classes.link, to: href}, children) : (
        <span className={classes.root}>
          <a className={classes.link} href={href} target={target}>{children}</a>
          {target === '_blank' && <OpenInNewIcon className={classes.icon} size={12} />}
        </span>
      )
    ) : <a {...this.props}>{children}</a>;
  }
}


export default withStyles(styles)(Prettylink);

import { Link } from 'gatsby';
import withStyles from '@material-ui/core/styles/withStyles';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import React from 'react';


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
    const isExternal = target === '_blank';
    const component = this.props.component || (href && href.startsWith('http') ? null : Link);
    return href ? (
      component ? React.createElement(component, {className: classes.link, to: href}, children) : (
        <span className={classes.root}>
          <a children={children}
             className={classes.link}
             href={href}
             target={target}
             {...(isExternal && {rel: 'noopener noreferrer'})} />
          {isExternal && <OpenInNewIcon className={classes.icon} size={12} />}
        </span>
      )
    ) : <a children={children} className={classes.link} href={href} target={target} />;
  }
}


export default withStyles(styles)(Prettylink);

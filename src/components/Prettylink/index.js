import { Link } from 'gatsby';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

export default function Prettylink({ children, component, href, target, ...rest }) {
  const classes = useStyles();
  const isBlank = target === '_blank';
  component = component || (href && href.startsWith('http') ? null : Link);
  return href ? (
    component
      ? React.createElement(component, {className: classes.link, to: href, ...rest}, children)
      : (
        <span className={classes.root}>
          <a
            children={children}
            className={classes.link}
            href={href}
            target={target}
            {...(isBlank && {rel: 'noopener noreferrer'})}
          />
          {isBlank && <OpenInNewIcon className={classes.icon} size={12} />}
        </span>
      )
  ) : <a children={children} className={classes.link} href={href} target={target} {...rest} />;
}

Prettylink.defaultProps = {
  target: '_blank',
};

Prettylink.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  href: PropTypes.string,
  target: PropTypes.string,
};

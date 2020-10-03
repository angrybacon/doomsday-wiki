import React from 'react';
import { Link } from 'gatsby';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import PropTypes from 'prop-types';
import useStyles from './styles';

export default function Prettylink({ children, component, href, target, ...rest }) {
  const classes = useStyles();
  const isBlank = target === '_blank';
  const Wrapper = component || (href && href.startsWith('http') ? null : Link);
  return href ? (
    Wrapper
      ? (<Wrapper className={classes.link} to={href} {...rest}>{children}</Wrapper>)
      : (
        <span>
          <a
            className={classes.link}
            href={href}
            target={target}
            {...(isBlank && {rel: 'noopener noreferrer'})}
          >
            {children}
          </a>
          {isBlank && <OpenInNewIcon className={classes.icon} size={12} />}
        </span>
      )
  ) : <a className={classes.link} href={href} target={target} {...rest}>{children}</a>;
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

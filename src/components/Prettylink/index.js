import { Link } from 'gatsby';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import React from 'react';
import useStyles from './styles';


export default function Prettylink({ children, component, href, target='_blank' }) {
  const classes = useStyles();
  const isBlank = target === '_blank';
  component = component || (href && href.startsWith('http') ? null : Link);
  return href ? (
    component ? React.createElement(component, {className: classes.link, to: href}, children) : (
      <span className={classes.root}>
        <a children={children}
           className={classes.link}
           href={href}
           target={target}
           {...(isBlank && {rel: 'noopener noreferrer'})} />
        {isBlank && <OpenInNewIcon className={classes.icon} size={12} />}
      </span>
    )
  ) : <a children={children} className={classes.link} href={href} target={target} />;
}

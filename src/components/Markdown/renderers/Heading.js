import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Heading({ children = [], level }) {
  if (!children.length) {
    return null;
  }
  const extra = {
    id: children[0].key,
    variant: `h${level + 2}`,
  };
  return <Typography gutterBottom {...extra}>{children}</Typography>;
}

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
};

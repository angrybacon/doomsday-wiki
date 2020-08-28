import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Heading({ children, level }) {
  return <Typography gutterBottom variant={`h${level + 2}`}>{children}</Typography>;
}

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
};

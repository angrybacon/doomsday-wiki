import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Heading({ children = [], level, node }) {
  if (!children.length) {
    return null;
  }
  const properties = {
    children,
    gutterBottom: true,
    id: node?.data?.id,
    variant: `h${level + 2}`,
  };
  return <Typography {...properties} />;
}

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  node: PropTypes.object,
};

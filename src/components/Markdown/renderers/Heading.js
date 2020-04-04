import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Heading({ children, level }) {
  return <Typography children={children} gutterBottom variant={`h${level + 2}`} />;
}


Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
};

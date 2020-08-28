import React from 'react';
import PropTypes from 'prop-types';
import MuiCard from '@material-ui/core/Card';
import useStyles from './styles';

export default function Card({ className, ...rest }) {
  const classes = useStyles();
  return (
    <MuiCard classes={{root: classes.root}} className={className} {...rest} />
  );
}

Card.propTypes = {
  className: PropTypes.string,
};

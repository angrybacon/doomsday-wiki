import MuiPaper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

export default function Paper({ className, ...rest }) {
  const classes = useStyles();
  return <MuiPaper classes={{root: classes.root}} className={className} {...rest} />;
}

Paper.propTypes = {
  className: PropTypes.string,
};

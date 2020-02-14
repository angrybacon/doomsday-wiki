import c from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import MuiPaper from '@material-ui/core/Paper';
import useStyles from './styles';


export default function Paper({ className, ...rest }) {
  const classes = useStyles();
  return (
    <MuiPaper classes={{rounded: classes.rounded}} className={c(classes.root, className)} {...rest} />
  );
}


Paper.propTypes = {
  className: PropTypes.string,
};

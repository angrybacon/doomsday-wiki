import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../styles';

export default function Code({ value }) {
  const classes = useStyles();
  return <pre className={classes.code}><code>{value}</code></pre>;
}

Code.propTypes = {
  value: PropTypes.string,
};

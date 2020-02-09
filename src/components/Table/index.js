import c from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import MuiTable from '@material-ui/core/Table';
import MuiTableContainer from '@material-ui/core/TableContainer';
import useStyles from './styles';


export default function Table({ children, className, minimal, size }) {
  const classes = useStyles();
  return !!children && (
    <MuiTableContainer className={c(classes.root, {[classes.minimal]: minimal}, className)}>
      <MuiTable children={children} size={size} />
    </MuiTableContainer>
  );
}


Table.defaultProps = {
  size: 'small',
};


Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  minimal: PropTypes.bool,
  size: PropTypes.string,
};

import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import MuiTable from '@material-ui/core/Table';
import MuiTableContainer from '@material-ui/core/TableContainer';
import useStyles from './styles';

export default function Table({ children, className, minimal, size }) {
  const classes = useStyles();
  return !!children && (
    <div className={c(classes.root, {[classes.minimal]: minimal}, className)}>
      <MuiTableContainer>
        <MuiTable size={size}>{children}</MuiTable>
      </MuiTableContainer>
    </div>
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

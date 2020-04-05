import PropTypes from 'prop-types';
import React from 'react';
import MuiTableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableHead from '@material-ui/core/TableHead';
import MuiTableRow from '@material-ui/core/TableRow';
import MuiTable from '../../Table';
import useStyles from '../styles';


export function TableBody({ children }) {
  return <MuiTableBody children={children} />;
}


TableBody.propTypes = {
  children: PropTypes.node,
};


export function TableCell({ align, children }) {
  return <MuiTableCell {...{align: align || undefined, children}} />;
}


TableCell.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
};


export function TableHead({ children }) {
  return <MuiTableHead children={children} />;
}


TableHead.propTypes = {
  children: PropTypes.node,
};


export function TableRow({ children }) {
  return <MuiTableRow children={children} />;
}


TableRow.propTypes = {
  children: PropTypes.node,
};


export default function Table({ children }) {
  const classes = useStyles();
  return <MuiTable children={children} className={classes.barf} />;
}


Table.propTypes = {
  children: PropTypes.node,
};

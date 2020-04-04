import PropTypes from 'prop-types';
import React from 'react';
import TableBodyWrapper from '@material-ui/core/TableBody';
import TableCellWrapper from '@material-ui/core/TableCell';
import TableHeadWrapper from '@material-ui/core/TableHead';
import TableRowWrapper from '@material-ui/core/TableRow';
import TableWrapper from '../../Table';
import useStyles from '../styles';


export function TableBody({ children }) {
  return <TableBodyWrapper children={children} />;
}


TableBody.propTypes = {
  children: PropTypes.node,
};


export function TableCell({ align, children }) {
  return <TableCellWrapper {...{align: align || undefined, children}} />;
}


TableCell.propTypes = {
  align: PropTypes.bool,
  children: PropTypes.node,
};


export function TableHead({ children }) {
  return <TableHeadWrapper children={children} />;
}


TableHead.propTypes = {
  children: PropTypes.node,
};


export function TableRow({ children }) {
  return <TableRowWrapper children={children} />;
}


TableRow.propTypes = {
  children: PropTypes.node,
};


export default function Table({ children }) {
  const classes = useStyles();
  return <TableWrapper children={children} className={classes.barf} />;
}


Table.propTypes = {
  children: PropTypes.node,
};

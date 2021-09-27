import React from 'react';
import type {
  Components,
  TableCellComponent,
  TableRowComponent,
} from 'react-markdown/lib/ast-to-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from './RemarkTable.styles';

export const RemarkTable: Components['table'] = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <Table size="small">{children}</Table>
    </div>
  );
};

export const RemarkTableBody: Components['tbody'] = ({ children }) => (
  <TableBody>{children}</TableBody>
);

export const RemarkTableCell: TableCellComponent = ({ children }) => {
  const classes = useStyles();
  return <TableCell className={classes.cell}>{children}</TableCell>;
};

export const RemarkTableHead: Components['thead'] = ({ children }) => {
  const classes = useStyles();
  return <TableHead className={classes.head}>{children}</TableHead>;
};

export const RemarkTableRow: TableRowComponent = ({ children }) => (
  <TableRow>{children}</TableRow>
);

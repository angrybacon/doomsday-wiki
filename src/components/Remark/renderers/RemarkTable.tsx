import React from 'react';
import type {
  Components,
  TableCellComponent,
  TableRowComponent,
} from 'react-markdown/lib/ast-to-react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

export const RemarkTable: Components['table'] = ({ children }) => (
  <Box
    sx={(theme) => ({
      ...theme.mixins.barf,
      borderTop: 1,
      borderTopColor: 'divider',
      overflowX: 'auto',
      '& + &': { borderTop: 0, mt: 0 },
    })}
  >
    <Table size="small">{children}</Table>
  </Box>
);

export const RemarkTableBody: Components['tbody'] = ({ children }) => (
  <TableBody>{children}</TableBody>
);

export const RemarkTableCell: TableCellComponent = ({ children, style }) => (
  <TableCell
    style={style}
    sx={[
      (theme) => theme.mixins.gutters,
      style?.textAlign === 'left' && { whiteSpace: 'nowrap' },
    ]}
  >
    {children}
  </TableCell>
);

export const RemarkTableHead: Components['thead'] = ({ children }) => (
  <TableHead
    sx={{ bgcolor: (theme) => alpha(theme.palette.primary.light, 0.1) }}
  >
    {children}
  </TableHead>
);

export const RemarkTableRow: TableRowComponent = ({ children }) => (
  <TableRow>{children}</TableRow>
);

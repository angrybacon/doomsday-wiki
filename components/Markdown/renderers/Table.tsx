'use client';

import type { Components } from 'react-markdown';

import {
  Box,
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from '@mui/material';

export const Table: Components['table'] = ({ children }) => (
  <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
    <MuiTableContainer
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 'inherit',
        overflowWrap: 'normal',
        overscrollBehaviorInline: 'contain',
      }}
    >
      <MuiTable size="small">{children}</MuiTable>
    </MuiTableContainer>
  </Box>
);

export const TableBody: Components['tbody'] = MuiTableBody;

export const TableCell: Components['td'] = ({ children, style }) => (
  <MuiTableCell style={style} sx={[{ borderColor: 'divider' }]}>
    {children}
  </MuiTableCell>
);

export const TableHead: Components['thead'] = ({ children }) => (
  <MuiTableHead
    sx={(theme) => ({
      bgcolor: `rgba(${theme.vars.palette.primary.mainChannel} / .1)`,
    })}
  >
    {children}
  </MuiTableHead>
);

export const TableRow: Components['tr'] = ({ children }) => (
  <MuiTableRow sx={{ '&:last-child td': { borderBottom: 0 } }}>
    {children}
  </MuiTableRow>
);

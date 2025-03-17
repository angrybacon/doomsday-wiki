import {
  alpha,
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from '@mui/material';
import { type ReactElement } from 'react';
import { type Components, type ExtraProps } from 'react-markdown';

export const Table: Components['table'] = ({ children }) => (
  <MuiTableContainer
    sx={({ mixins }) => ({
      borderTop: 1,
      borderTopColor: 'divider',
      overflowX: 'auto',
      '& + &': { borderTop: 0 },
    })}
  >
    <MuiTable size="small">{children}</MuiTable>
  </MuiTableContainer>
);

export const TableBody: Components['tbody'] = ({ children }) => (
  <MuiTableBody>{children}</MuiTableBody>
);

export const TableCell = <T extends 'td' | 'th' = never>({
  children,
  style,
}: JSX.IntrinsicElements[T] & ExtraProps): ReactElement => (
  <MuiTableCell
    style={style}
    sx={[
      ({ mixins }) => mixins.gutters,
      style?.textAlign === 'left' && { whiteSpace: 'nowrap' },
    ]}
  >
    {children}
  </MuiTableCell>
);

export const TableHead: Components['thead'] = ({ children }) => (
  <MuiTableHead
    sx={{ bgcolor: ({ palette }) => alpha(palette.primary.light, 0.1) }}
  >
    {children}
  </MuiTableHead>
);

export const TableRow: Components['tr'] = ({ children }) => (
  <MuiTableRow>{children}</MuiTableRow>
);

import {
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from '@mui/material';
import { type Components, type ExtraProps } from 'react-markdown';

export const Table: Components['table'] = ({ children }) => (
  <MuiTableContainer
    sx={{ border: 1, borderColor: 'divider', borderRadius: 4 }}
  >
    <MuiTable size="small">{children}</MuiTable>
  </MuiTableContainer>
);

export const TableBody: Components['tbody'] = ({ children }) => (
  <MuiTableBody>{children}</MuiTableBody>
);

const CELL_ALIGN: Record<string, 'center' | 'left' | 'right'> = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export const TableCell = <T extends 'td' | 'th' = never>({
  children,
  node,
}: JSX.IntrinsicElements[T] & ExtraProps) => {
  const align = CELL_ALIGN[`${node?.properties.align}`];
  return (
    <MuiTableCell align={align} sx={{ borderColor: 'divider' }}>
      {children}
    </MuiTableCell>
  );
};

export const TableHead: Components['thead'] = ({ children }) => (
  <MuiTableHead
    sx={({ vars }) => ({
      bgcolor: `rgba(${vars.palette.primary.mainChannel} / .1)`,
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

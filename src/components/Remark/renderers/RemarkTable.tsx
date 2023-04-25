import type { Components } from 'react-markdown';
import type {
  ComponentType,
  TableDataCellProps,
  TableHeaderCellProps,
  TableRowComponent,
} from 'react-markdown/lib/ast-to-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

export const RemarkTable: Components['table'] = ({ children }) => (
  <Table
    size="small"
    sx={({ mixins }) => ({
      ...mixins.barf,
      borderTop: 1,
      borderTopColor: 'divider',
      overflowX: 'auto',
      '& + &': { borderTop: 0 },
    })}
  >
    {children}
  </Table>
);

export const RemarkTableBody: Components['tbody'] = ({ children }) => (
  <TableBody>{children}</TableBody>
);

export const RemarkTableCell: ComponentType<
  TableDataCellProps | TableHeaderCellProps
> = ({ children, style }) => (
  <TableCell
    style={style}
    sx={[
      ({ mixins }) => mixins.gutters,
      style?.textAlign === 'left' && { whiteSpace: 'nowrap' },
    ]}
  >
    {children}
  </TableCell>
);

export const RemarkTableHead: Components['thead'] = ({ children }) => (
  <TableHead
    sx={{ bgcolor: ({ palette }) => alpha(palette.primary.light, 0.1) }}
  >
    {children}
  </TableHead>
);

export const RemarkTableRow: TableRowComponent = ({ children }) => (
  <TableRow>{children}</TableRow>
);

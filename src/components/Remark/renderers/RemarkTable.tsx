import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ReactElement } from 'react';
import { ExtraProps, type Components } from 'react-markdown';

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

export const RemarkTableCell = <T extends 'td' | 'th' = never>({
  children,
  style,
}: JSX.IntrinsicElements[T] & ExtraProps): ReactElement => (
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

export const RemarkTableRow: Components['tr'] = ({ children }) => (
  <TableRow>{children}</TableRow>
);

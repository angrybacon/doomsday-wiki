import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  type SxProps,
} from '@mui/material';
import { useEffect, useState, type FunctionComponent } from 'react';

import { getRosetta, type Rosetta } from '@/tools/game/getRosetta';
import { type CATEGORIES } from '@/tools/markdown/constants';

type Props = {
  category: (typeof CATEGORIES)[number] | undefined;
  sx?: SxProps;
};

export const SidebarRosetta: FunctionComponent<Props> = ({ category, sx }) => {
  const [rosetta, setRosetta] = useState<Rosetta>([]);

  useEffect(() => {
    setRosetta(getRosetta(category));
  }, [category]);

  return (
    <Table
      padding="checkbox"
      size="small"
      sx={[
        {
          [`.${tableCellClasses.body}`]: { color: 'text.secondary' },
          [`.${tableCellClasses.root}`]: { border: 0, typography: 'caption' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <TableHead>
        <TableRow>
          <TableCell>Notation</TableCell>
          <TableCell>Card</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rosetta.map(([notation, card]) => (
          <TableRow key={`rosetta-${notation}-${card}`}>
            <TableCell component="th" scope="row">
              {notation}
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{card}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

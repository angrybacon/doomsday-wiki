import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { getRosetta } from '@/tools/game/getRosetta';
import type { Rosetta } from '@/tools/game/getRosetta';

interface Props {
  category: string | undefined;
  sx?: SxProps<Theme>;
}

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

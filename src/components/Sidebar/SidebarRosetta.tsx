import React, { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import { getRosetta } from '@/tools/game/getRosetta';
import type { Rosetta } from '@/tools/game/getRosetta';

interface Props {
  category: string;
}

export const SidebarRosetta: FunctionComponent<Props> = ({ category }) => {
  const [rosetta, setRosetta] = useState<Rosetta>([]);

  useEffect(() => {
    setRosetta(getRosetta(category));
  }, [category]);

  return (
    <Table
      padding="normal"
      size="small"
      sx={{
        [`.${tableCellClasses.root}`]: { border: 0, typography: 'caption' },
        [`.${tableCellClasses.head}`]: { fontWeight: 'bold' },
      }}
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
            <TableCell>{notation}</TableCell>
            <TableCell>{card}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

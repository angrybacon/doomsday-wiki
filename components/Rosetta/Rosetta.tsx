'use client';

import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  type SxProps,
} from '@mui/material';

import { useLayout } from '@/hooks/useLayout';
import { CARDS } from '@/tools/game/constants/Cards';

const Row = ({
  category,
  categories,
  name,
  notation,
}: {
  category: string | null;
  categories: string[];
  name: string;
  notation: string;
}) => {
  const dedicated = !!(category && categories.includes(category));
  return !categories.length || dedicated ? (
    <TableRow
      sx={[
        dedicated && {
          [`.${tableCellClasses.body}`]: { color: 'text.primary' },
        },
      ]}
    >
      <TableCell component="th">{notation}</TableCell>
      <TableCell sx={[{ whiteSpace: 'nowrap' }]}>{name}</TableCell>
    </TableRow>
  ) : null;
};

type Props = {
  sx?: SxProps;
};

export const Rosetta = ({ sx }: Props) => {
  const { category } = useLayout();
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
        {Object.entries(CARDS).map(([notation, card]) => (
          <Row
            category={category}
            categories={card[1]}
            key={notation}
            name={card[0]}
            notation={notation}
          />
        ))}
      </TableBody>
    </Table>
  );
};

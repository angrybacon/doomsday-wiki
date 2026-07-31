'use client';

import type { SxProps } from '@mui/material';

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  tableCellClasses,
} from '@mui/material';

import { useLayout } from '~/hooks/useLayout';
import { CARDS } from '~/tools/rosetta/constants';

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
          [`.${tableCellClasses.body}`]: { color: 'text.secondary' },
        },
      ]}
    >
      <TableCell component="th" sx={{ pr: 1 }}>
        {notation}
      </TableCell>
      <TableCell>{name}</TableCell>
    </TableRow>
  ) : null;
};

type Props = {
  sx?: SxProps;
};

export const Rosetta = ({ sx }: Props) => {
  const { category } = useLayout();
  return (
    <Box sx={sx}>
      <Table
        padding="none"
        size="small"
        sx={[
          {
            [`.${tableCellClasses.body}`]: { color: 'text.disabled' },
            [`.${tableCellClasses.root}`]: { border: 0, typography: 'caption' },
          },
        ]}
      >
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
    </Box>
  );
};

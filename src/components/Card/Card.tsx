import React, { useState } from 'react';
import type { FunctionComponent, ReactNode } from 'react';
import { mdiCached } from '@mdi/js';
import Icon from '@mdi/react';
import { Box, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { CardFace } from '@/components/Card/CardFace';
import type { ScryCard } from '@/tools/scryfall/types';

export interface Props {
  data: ScryCard[];
}

export const Card: FunctionComponent<Props> = ({ data }) => {
  const [selectedFace, setSelectedFace] = useState<number>(0);

  /** Toggle index between 0 and 1. */
  const onFlip = () => setSelectedFace((previous) => 1 - previous);

  const button: ReactNode =
    data.length > 1 ? (
      <IconButton
        onClick={onFlip}
        sx={({ breakpoints, palette, shadows, spacing }: Theme) => ({
          backdropFilter: 'blur(2px)',
          backgroundColor: alpha(palette.common.white, 0.4),
          boxShadow: shadows[1],
          height: spacing(5),
          left: 0,
          margin: '0 auto',
          position: 'absolute',
          right: 0,
          top: '13%',
          width: spacing(5),
          '&:hover': { backgroundColor: alpha(palette.common.white, 0.5) },
          [breakpoints.up('sm')]: {
            height: spacing(6),
            left: 'unset',
            margin: 0,
            right: '10%',
            width: spacing(6),
          },
        })}
        title="Flip"
      >
        <Icon path={mdiCached} />
      </IconButton>
    ) : null;

  return (
    <Box
      sx={{
        // NOTE Hard-coded ratio to iron irregularities from Scryfall data
        aspectRatio: '5 / 7',
        position: 'relative',
      }}
    >
      {data.map((face, index) => (
        <CardFace
          active={index === selectedFace}
          data={face}
          key={face.name}
          sx={{ position: 'absolute' }}
        />
      ))}
      {button}
    </Box>
  );
};

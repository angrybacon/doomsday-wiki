'use client';

import type { ScrySingleResponse } from '@korumite/scrydrop';

import ThreeSixtyIcon from '@mui/icons-material/ThreeSixtyRounded';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';

import { CardFace } from '~/components/Card/CardFace';

type Props = {
  faces: ScrySingleResponse;
};

export const Card = ({ faces: [front, back] }: Props) => {
  const [selected, setSelected] = useState(0);

  /** Toggle index between 0 and 1 */
  const onFlip = () => setSelected((previous) => previous ^ 1);

  if (!front) return null;

  return (
    <Box
      sx={{
        // NOTE Hard-coded ratio to iron out irregularities from Scryfall data
        aspectRatio: '5 / 7',
        display: 'flex',
        justifyContent: 'center',
        perspective: 1000,
        position: 'relative',
      }}
    >
      <Box
        sx={(theme) => ({
          height: 1,
          transform: selected ? 'rotateY(.5turn)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
          transition: theme.transitions.create('transform'),
          width: 1,
          '> *': { backfaceVisibility: 'hidden', position: 'absolute' },
        })}
      >
        <CardFace active={selected === 0} face={front} />
        {back && <CardFace active={selected === 1} face={back} flipped />}
      </Box>

      {back && front.layout !== 'split' && (
        <Tooltip title="Flip">
          <IconButton
            data-light
            onClick={onFlip}
            sx={(theme) => ({
              ...theme.mixins.blur('weakest'),
              bgcolor: 'rgb(var(--mui-palette-background-paperChannel) / .6)',
              boxShadow: 1,
              position: 'absolute',
              right: { xs: 'unset', sm: '14%' },
              top: '10%',
              '&:hover': {
                bgcolor: 'rgb(var(--mui-palette-background-paperChannel) / .7)',
              },
            })}
          >
            <ThreeSixtyIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

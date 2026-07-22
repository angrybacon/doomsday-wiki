'use client';

import type { ScrySingleResponse } from '@korumite/scrydrop';

import { mdiCached } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';

import { CardFace } from '~/components/Card/CardFace';

type Props = {
  faces: ScrySingleResponse;
};

export const Card = ({ faces }: Props) => {
  const [selected, setSelected] = useState(0);

  /** Toggle index between 0 and 1 */
  const onFlip = () => setSelected((previous) => previous ^ 1);

  const button =
    faces.length > 1 ? (
      <IconButton
        data-light
        onClick={onFlip}
        sx={(theme) => ({
          ...theme.mixins.blur('weakest'),
          bgcolor: `rgba(${theme.vars.palette.background.paperChannel} / .4)`,
          boxShadow: 1,
          height: [40, 48],
          left: 'unset',
          position: 'absolute',
          right: ['unset', '10%'],
          top: '13%',
          width: [40, 48],
          '&:hover': {
            bgcolor: `rgba(${theme.vars.palette.background.paperChannel} / .5)`,
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
        // NOTE Hard-coded ratio to iron out irregularities from Scryfall data
        aspectRatio: '5 / 7',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {faces.map((face, index) => (
        <CardFace
          active={index === selected}
          face={face}
          key={face.name}
          sx={{ position: 'absolute' }}
        />
      ))}
      {button}
    </Box>
  );
};

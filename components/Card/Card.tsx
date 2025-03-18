import { mdiCached } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box, IconButton } from '@mui/material';
import { useState, type FunctionComponent, type ReactNode } from 'react';

import { CardFace } from '@/components/Card/CardFace';
import { type ScryCard } from '@/tools/scryfall/types';

type Props = {
  data: ScryCard[];
};

export const Card: FunctionComponent<Props> = ({ data }) => {
  const [selectedFace, setSelectedFace] = useState(0);

  /** Toggle index between 0 and 1 */
  const onFlip = () => setSelectedFace((previous) => 1 - previous);

  const button: ReactNode =
    data.length > 1 ? (
      <IconButton
        className="light"
        onClick={onFlip}
        sx={({ mixins, vars }) => ({
          ...mixins.blur('weakest'),
          bgcolor: `rgba(${vars.palette.background.paperChannel} / .4)`,
          boxShadow: 1,
          height: [40, 48],
          left: 'unset',
          position: 'absolute',
          right: ['unset', '10%'],
          top: '13%',
          width: [40, 48],
          '&:hover': {
            bgcolor: `rgba(${vars.palette.background.paperChannel} / .5)`,
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

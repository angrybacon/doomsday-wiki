import { Box, Fade, Tooltip, type SxProps } from '@mui/material';
import { type FunctionComponent } from 'react';

import { type ScryCard } from '@/tools/scryfall/types';

type Props = {
  active: boolean;
  data: ScryCard;
  sx?: SxProps;
};

export const CardFace: FunctionComponent<Props> = ({ active, data, sx }) => {
  const { artist, images, name, setName } = data;
  const image = images.full;

  if (!image) return null;

  const description = [`"${name}" from ${setName}`, `Art by ${artist}`];
  const title = description.map((line) => <div key={line}>{line}</div>);

  return (
    <Tooltip title={title}>
      <Fade in={active}>
        <Box
          alt={description.join(' - ')}
          component="img"
          decoding="async"
          loading="lazy"
          src={image}
          sx={[
            {
              backgroundColor: ({ palette }) => palette.action.selected,
              borderRadius: ['2px', '4px'],
              display: 'block',
              height: 1,
              opacity: 0,
              pointerEvents: 'none',
              width: 1,
            },
            active && { pointerEvents: 'initial' },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
        />
      </Fade>
    </Tooltip>
  );
};

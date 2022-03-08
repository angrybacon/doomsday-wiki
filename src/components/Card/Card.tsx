import React, { FunctionComponent, ReactChild } from 'react';
import { Box, Tooltip } from '@mui/material';
import type { ScryCard } from '@/tools/scryfall/types';

export interface Props {
  data: ScryCard;
}

export const Card: FunctionComponent<Props> = ({ data }) => {
  const { artist, images, name, setName } = data;
  const image = images.full;

  if (!image) return null;

  const titleLines: string[] = [
    `"${name}" from ${setName}`,
    `Art by ${artist}`,
  ];

  const title: ReactChild[] = titleLines.map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={`line-${index}`}>{line}</div>
  ));

  return (
    <Tooltip arrow title={title}>
      <Box
        alt={titleLines.join(' - ')}
        component="img"
        loading="lazy"
        src={image}
        sx={{
          // NOTE Hard-coded ratio to smooth out irregularities from Scryfall data
          aspectRatio: '5 / 7',
          display: 'block',
          width: 1,
        }}
      />
    </Tooltip>
  );
};

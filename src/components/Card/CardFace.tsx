import type { FunctionComponent, ReactNode } from 'react';
import { Box, Fade, Tooltip } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import type { ScryCard } from '@/tools/scryfall/types';

export interface Props {
  active: boolean;
  data: ScryCard;
  sx?: SxProps<Theme>;
}

export const CardFace: FunctionComponent<Props> = ({ active, data, sx }) => {
  const { artist, images, name, setName } = data;
  const image = images.full;

  if (!image) return null;

  const titleLines: string[] = [
    `"${name}" from ${setName}`,
    `Art by ${artist}`,
  ];

  const title: ReactNode = titleLines.map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={`line-${index}`}>{line}</div>
  ));

  return (
    <Tooltip arrow title={title}>
      <Fade in={active}>
        <Box
          alt={titleLines.join(' - ')}
          component="img"
          decoding="async"
          loading="lazy"
          src={image}
          sx={[
            {
              backgroundColor: (theme: Theme) => theme.palette.action.selected,
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

'use client';

import type { SxProps } from '@mui/material';
import type { Banner as BannerModel } from '~/tools/markdown/types';

import { Box, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

type Props = {
  authors?: string;
  banner: BannerModel;
  minutes: number;
  title: string;
  sx: SxProps;
};

export const Banner = ({ authors, banner, minutes, title, sx }: Props) => {
  const [ready, setReady] = useState(false);

  const onLoad = useCallback(() => setReady(true), []);

  const image = useCallback(
    (element: HTMLImageElement | null) => {
      // NOTE The image's `onLoad` fires before React even finishes loading so
      //      server-rendered component need a jQuery approach to have the fade
      //      animation.
      if (element?.complete) onLoad();
    },
    [onLoad],
  );

  return (
    <Box
      data-dark
      sx={[
        {
          alignItems: 'center',
          // NOTE Chromium (?) expands the child blur area outside of the border
          //      radius. This resets the blur in order to avoid white corners.
          backdropFilter: 'blur(0)',
          backgroundImage: `url(${banner.lqip})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: 4,
          display: 'flex',
          height: { xs: 160, md: 250 },
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        },
        // oxlint-disable-next-line no-unsafe-assignment
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      title={banner.title}
    >
      <Box
        alt={banner.label}
        component="img"
        onLoad={onLoad}
        ref={image}
        src={banner.art}
        sx={(theme) => ({
          height: 1,
          inset: 0,
          objectFit: 'cover',
          opacity: ready ? 1 : 0,
          position: 'absolute',
          transition: theme.transitions.create('opacity', { duration: 1000 }),
          width: 1,
        })}
      />
      <Box
        role="presentation"
        sx={(theme) => ({
          ...theme.mixins.blur('weak'),
          inset: 0,
          position: 'absolute',
        })}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 4,
          justifyItems: 'center',
          position: 'absolute',
          px: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'text.primary',
            fontSize: { xs: 'h6.fontSize', md: 'h2.fontSize' },
            textShadow: '0 0 8px black',
          }}
          variant="h1"
        >
          {title}
        </Typography>
        {banner.flavor && (
          <Typography
            sx={{
              color: 'text.secondary',
              display: { xs: 'none', sm: 'block' },
              fontStyle: 'italic',
              maxWidth: '80%',
              textShadow: '0 0 4px black',
              whiteSpace: 'pre-wrap',
            }}
            variant="subtitle2"
          >
            {banner.flavor}
          </Typography>
        )}
      </Box>
      <Typography
        sx={{
          bottom: 0,
          color: 'text.primary',
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          left: 0,
          pb: 1,
          px: 2,
          position: 'absolute',
          right: 0,
          textAlign: 'right',
          textShadow: '0 0 4px black',
        }}
        variant="caption"
      >
        {authors && <div>By {authors}</div>}
        <Box sx={{ ml: 'auto' }}>
          Reading time: {`${minutes} minute${minutes > 1 ? 's' : ''}`}
        </Box>
      </Typography>
    </Box>
  );
};

import React, { FunctionComponent } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { Banner as BannerModel } from '@/tools/markdown/types';

export interface Props {
  banner: BannerModel;
  title: string;
}

export const Banner: FunctionComponent<Props> = ({ banner, title }) => (
  <>
    <Box
      aria-level={1}
      role="heading"
      sx={{
        bgcolor:
          // NOTE Add a dark background to blend the blurring effect
          ({ palette }) => palette.grey[palette.mode === 'light' ? 600 : 800],
        overflow: 'hidden',
        position: 'relative',
      }}
      title={banner.title}
    >
      <Box
        sx={{
          background: `url(${banner.art}) center / cover no-repeat`,
          display: 'flex',
          filter: 'blur(4px)',
          height: { xs: 190, md: 270 },
        }}
      />
      <Typography
        variant="h1"
        sx={{
          alignItems: 'center',
          bgcolor: (theme) => alpha(theme.palette.common.black, 0.3),
          bottom: 0,
          color: 'common.white',
          display: 'flex',
          fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
          justifyContent: 'center',
          left: 0,
          margin: 0,
          position: 'absolute',
          px: { xs: 2, md: 3, lg: 4 },
          right: 0,
          textAlign: 'center',
          top: 0,
        }}
      >
        {title}
      </Typography>
    </Box>
    <Divider />
  </>
);

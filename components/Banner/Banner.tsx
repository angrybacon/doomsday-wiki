'use client';

import { Box, Typography, type SxProps } from '@mui/material';
import Image from 'next/image';

import { type Banner as BannerModel } from '@/tools/markdown/types';

type Props = {
  author?: string;
  banner: BannerModel;
  minutes: number;
  title: string;
  sx: SxProps;
};

export const Banner = ({ author, banner, minutes, title, sx }: Props) => (
  <Box
    aria-level={1}
    className="dark"
    role="heading"
    sx={[
      {
        alignItems: 'center',
        // NOTE Chromium (?) expands the child blur area outside of the border
        //      radius. This resets the blur in order to avoid white corners.
        backdropFilter: 'blur(0)',
        borderRadius: 4,
        display: 'flex',
        height: { xs: 160, md: 250 },
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    title={banner.title}
  >
    <Image
      alt={banner.title}
      blurDataURL={banner.artPreview}
      fill
      placeholder="blur"
      priority
      src={banner.art}
      style={{ objectFit: 'cover' }}
    />
    <Box
      role="presentation"
      sx={({ mixins }) => ({
        ...mixins.blur('weak'),
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
        color: 'text.secondary',
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
      {author && <div>By {author}</div>}
      <Box sx={{ ml: 'auto' }}>
        Reading time: {`${minutes} minute${minutes > 1 ? 's' : ''}`}
      </Box>
    </Typography>
  </Box>
);

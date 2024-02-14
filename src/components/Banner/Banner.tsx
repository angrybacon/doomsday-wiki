import { Box, Divider, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';
import { type FunctionComponent } from 'react';

import { type Banner as BannerModel } from '@/tools/markdown/types';

interface Props {
  banner: BannerModel;
  footer?: string[];
  title: string;
}

export const Banner: FunctionComponent<Props> = ({
  banner,
  footer = [],
  title,
}) => (
  <>
    <Box
      aria-level={1}
      role="heading"
      sx={({ palette }) => ({
        // NOTE Add a dark background to blend the blurring effect
        backgroundColor: palette.grey[palette.mode === 'light' ? 600 : 800],
        overflow: 'hidden',
        position: 'relative',
        textShadow: `0 0 8px ${palette.common.black}`,
      })}
      title={banner.title}
    >
      <Box
        role="presentation"
        sx={{
          height: { xs: 190, md: 280 },
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image
          alt={banner.title}
          blurDataURL={banner.artPreview}
          fill
          placeholder="blur"
          priority
          src={banner.art}
          // NOTE The fit property has to be set directly on the image element
          //      for the behavior to be propagated to the blur preview.
          style={{ filter: 'blur(4px)', objectFit: 'cover' }}
        />
      </Box>
      <Box
        sx={({ palette }) => ({
          alignItems: 'center',
          backgroundColor: alpha(palette.common.black, 0.3),
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          left: 0,
          margin: 0,
          position: 'absolute',
          px: { xs: 2, md: 3, lg: 4 },
          right: 0,
          top: 0,
        })}
      >
        <Typography
          sx={{
            color: 'common.white',
            fontSize: { xs: '1.8rem', md: '2.4rem', lg: '3rem' },
            textAlign: 'center',
          }}
          variant="h1"
        >
          {title}
        </Typography>
        {banner.flavor && (
          <Typography
            component="span"
            sx={({ breakpoints }) => ({
              color: 'grey.300',
              fontStyle: 'italic',
              maxWidth: 600,
              mt: 2,
              textAlign: 'center',
              whiteSpace: 'pre-wrap',
              [breakpoints.only('xs')]: { display: 'none' },
            })}
            variant="subtitle2"
          >
            {banner.flavor}
          </Typography>
        )}
      </Box>
      {footer.length > 0 && (
        <Box
          sx={({ breakpoints }) => ({
            bottom: 0,
            color: 'grey.300',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            left: 0,
            pb: 0.5,
            px: 1,
            position: 'absolute',
            right: 0,
            textAlign: 'right',
            [breakpoints.only('xs')]: { flexDirection: 'row' },
          })}
        >
          {footer.map((line) => (
            <Typography
              component="div"
              key={`footer-${line}`}
              variant="caption"
            >
              {line}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
    <Divider />
  </>
);

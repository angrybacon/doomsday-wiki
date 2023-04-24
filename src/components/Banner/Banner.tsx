import { FunctionComponent } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { Banner as BannerModel } from '@/tools/markdown/types';

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
        sx={{
          background: `url(${banner.art}) center / cover no-repeat`,
          display: 'flex',
          filter: 'blur(2px)',
          height: { xs: 190, md: 280 },
        }}
      />
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
            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
            textAlign: 'center',
          }}
          variant="h1"
        >
          {title}
        </Typography>
        {banner.flavor && (
          <Typography
            component="span"
            sx={{
              color: 'grey.300',
              fontStyle: 'italic',
              maxWidth: 600,
              mt: 2,
              textAlign: 'center',
              whiteSpace: 'pre-wrap',
            }}
            variant="subtitle2"
          >
            {banner.flavor}
          </Typography>
        )}
      </Box>
      {footer.length > 0 && (
        <Box
          sx={{
            bottom: 0,
            color: 'grey.300',
            pb: 0.5,
            pr: 1,
            position: 'absolute',
            right: 0,
            textAlign: 'right',
          }}
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

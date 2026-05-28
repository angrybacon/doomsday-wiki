import type { Components } from 'react-markdown';

import { RemarkError } from '@korumite/kiwi';
import { Box, Typography } from '@mui/material';

export const Image: Components['img'] = ({ alt, node, src, title }) => {
  if (!alt) throw new RemarkError('Missing alternate title', { node });
  if (!src) throw new RemarkError('Missing source', { node });
  return (
    <>
      <Box
        component="span"
        sx={[
          {
            border: 1,
            borderColor: 'divider',
            borderRadius: 4,
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
          },
          typeof src === 'string' && {
            '&:before': {
              backgroundImage: `url(${src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              content: '""',
              display: 'block',
              filter: 'blur(24px)',
              inset: 0,
              position: 'absolute',
            },
          },
        ]}
        title={title}
      >
        <Box
          alt={alt}
          component="img"
          decoding="async"
          src={src}
          sx={{
            aspectRatio: '3 / 1',
            display: 'block',
            height: 'auto',
            objectFit: 'contain',
            position: 'relative',
            width: 1,
          }}
        />
      </Box>
      {title && (
        <Typography
          color="textSecondary"
          component="em"
          sx={{ display: 'block', mt: 1, textAlign: 'center' }}
          variant="caption"
        >
          {title}
        </Typography>
      )}
    </>
  );
};

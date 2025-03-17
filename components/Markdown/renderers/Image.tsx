import { Box, Typography } from '@mui/material';
import { type Components } from 'react-markdown';

export const Image: Components['img'] = ({ alt, node, src, title }) => {
  if (!src) {
    console.error('Missing image source', node);
    return null;
  }
  return (
    <>
      <Box
        alt={alt}
        component="img"
        decoding="async"
        src={src}
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 4,
          display: 'block',
          width: 1,
        }}
        title={title}
      />
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

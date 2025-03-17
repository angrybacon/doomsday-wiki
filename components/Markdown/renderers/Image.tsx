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
        component="span"
        sx={({ mixins }) => ({
          border: 1,
          borderColor: 'divider',
          borderLeft: 0,
          borderRight: 0,
          display: 'block',
          img: { display: 'block', width: 1 },
        })}
      >
        <img alt={alt} decoding="async" src={src} title={title} />
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

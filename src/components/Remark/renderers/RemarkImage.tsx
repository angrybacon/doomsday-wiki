import React from 'react';
import type { Components } from 'react-markdown';
import { Box, Typography } from '@mui/material';

export const RemarkImage: Components['img'] = ({ title, ...rest }) => {
  if (!rest.src) return null;
  const description: string | undefined = title || rest.alt;
  return (
    <>
      <Box
        sx={(theme) => ({
          ...theme.mixins.barf,
          border: 1,
          borderColor: 'divider',
          borderLeft: 0,
          borderRight: 0,
          img: { display: 'block', width: 1 },
        })}
      >
        <img alt={description} {...rest} title={description} />
      </Box>
      {description && (
        <Typography
          color="textSecondary"
          component="em"
          sx={{ display: 'block', mt: 1, textAlign: 'center' }}
          variant="caption"
        >
          {description}
        </Typography>
      )}
    </>
  );
};

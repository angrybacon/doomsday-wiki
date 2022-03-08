import React from 'react';
import type { Components } from 'react-markdown';
import { Box } from '@mui/material';

export const RemarkQuote: Components['blockquote'] = ({ children }) => (
  <Box
    component="blockquote"
    sx={{
      color: 'text.secondary',
      fontStyle: 'italic',
      m: 0,
      pl: 2,
      position: 'relative',
      '&:before': {
        bgcolor: 'secondary.main',
        borderRadius: '4px',
        content: '""',
        display: 'block',
        height: 1,
        left: 0,
        position: 'absolute',
        width: 4,
      },
      '&, & > *': {
        fontDisplay: 'swap',
        fontFamily: 'Libre Baskerville, serif',
      },
      '& > :first-child': { pt: 1 },
      '& > :last-child': { pb: 1 },
    }}
  >
    {children}
  </Box>
);

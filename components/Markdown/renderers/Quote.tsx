import { Box } from '@mui/material';
import { type Components } from 'react-markdown';

export const Quote: Components['blockquote'] = ({ children }) => (
  <Box
    component="blockquote"
    sx={{
      color: 'text.secondary',
      display: 'grid',
      fontDisplay: 'swap',
      fontFamily: 'Libre Baskerville, serif',
      fontStyle: 'italic',
      gap: 2,
      pl: 2,
      py: 1,
      position: 'relative',
      '&:before': {
        bgcolor: 'secondary.main',
        borderRadius: '50vh 0 0 50vh',
        content: '""',
        display: 'block',
        height: 1,
        left: 0,
        position: 'absolute',
        width: 4,
      },
      '> *': {
        fontFamily: 'inherit',
      },
    }}
  >
    {children}
  </Box>
);

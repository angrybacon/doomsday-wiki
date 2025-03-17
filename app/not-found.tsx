import { Box } from '@mui/material';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
};

export default () => (
  <Box
    sx={{
      alignSelf: 'center',
      fontSize: '10em',
      fontWeight: 'light',
      gridRow: 'content',
      justifySelf: 'center',
      textAlign: 'center',
    }}
  >
    404
  </Box>
);

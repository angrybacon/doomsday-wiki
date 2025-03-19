import { Box } from '@mui/material';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
};

export default () => (
  <>
    <Box
      sx={{
        backgroundImage: 'url(/404.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        inset: 0,
        m: 0,
        position: 'absolute',
      }}
    />
    <Box
      className="dark"
      sx={{
        alignSelf: 'center',
        color: 'text.primary',
        fontSize: '10em',
        fontWeight: 'light',
        gridRow: 'content',
        justifySelf: 'center',
        m: 0,
        maxHeight: '100vh',
        maxWidth: '100vw',
        position: 'absolute',
        textAlign: 'center',
        textShadow: '0 0 8px black',
      }}
    >
      404
    </Box>
  </>
);

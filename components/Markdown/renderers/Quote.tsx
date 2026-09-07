import type { Components } from 'react-markdown';

import { RemarkError } from '@korumite/kiwi';
import { Box } from '@mui/material';

export const Quote: Components['blockquote'] = ({ children, node }) => {
  if (!children) throw new RemarkError('Missing content', { node });
  return (
    <Box
      component="blockquote"
      sx={{
        color: 'text.secondary',
        display: 'grid',
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
        '> *': { fontFamily: 'inherit' },
      }}
    >
      {children}
    </Box>
  );
};

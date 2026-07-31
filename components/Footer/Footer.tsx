'use client';

import { Box } from '@mui/material';

import { Link } from '~/components/Link/Link';

export const Footer = () => (
  <Box
    component="footer"
    sx={(theme) => ({
      ...theme.mixins.blur('strong'),
      bgcolor: 'rgba(var(--mui-palette-primary-mainChannel) / .1)',
      borderTop: 1,
      borderTopColor: 'divider',
      color: 'text.secondary',
      // NOTE Force content above 404 background
      position: 'relative',
      px: 3,
      py: 3,
      textAlign: 'center',
      typography: 'caption',
      'main:has(> [data-not-found]) ~ &': { color: 'common.white' },
    })}
  >
    <p>
      &copy; Doomsday Wiki contributors &bull; {process.env.NEXT_PUBLIC_VERSION}
    </p>
    <p>
      Read the notice about <Link href="/license">licenses and resources</Link>.
      This site collects anonymous usage data to improve its content.
    </p>
  </Box>
);

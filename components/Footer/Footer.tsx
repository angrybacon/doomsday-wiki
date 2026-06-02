import type { SxProps } from '@mui/material';

import { Box } from '@mui/material';

import { Link } from '@/components/Link/Link';

type Props = {
  sx?: SxProps;
};

export const Footer = ({ sx }: Props) => (
  <Box
    component="footer"
    sx={[
      {
        color: 'text.secondary',
        textAlign: 'center',
        typography: 'caption',
        '[data-dark] &': { textShadow: '0 0 4px black' },
        '[data-light] &': { textShadow: '0 0 4px white' },
      },
      // oxlint-disable-next-line no-unsafe-assignment
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <p>
      &copy; {new Date().getUTCFullYear()} Doomsday Wiki contributors. Read the
      notice about <Link href="/license">licenses and resources</Link>.
    </p>
    <p>
      This page collects anonymous analytics in order to improve its contents.
      By browsing the Wiki, you consent to the collection and use of that data.
    </p>
  </Box>
);

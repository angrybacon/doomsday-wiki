import type { SxProps } from '@mui/material';

import { Box } from '@mui/material';

import { Link } from '~/components/Link/Link';

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
      &copy; Doomsday Wiki contributors &bull; {process.env.NEXT_PUBLIC_VERSION}
    </p>
    <p>
      Read the notice about <Link href="/license">licenses and resources</Link>.
      This site collects anonymous usage data to improve its content.
    </p>
  </Box>
);

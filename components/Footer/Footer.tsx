import { Box, type SxProps } from '@mui/material';

import { Link } from '@/components/Link/Link';

type Props = {
  sx?: SxProps;
};

export const Footer = ({ sx }: Props) => (
  <Box
    component="footer"
    sx={[
      { color: 'text.secondary', textAlign: 'center', typography: 'caption' },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <p>
      &copy; 2017-2025 Doomsday Wiki contributors. Read the notice about{' '}
      <Link href="/license">licenses and resources</Link>.
    </p>
    <p>
      This page collects anonymous analytics in order to improve its contents.
      By browsing the Wiki, you consent to the collection and use of that data.
    </p>
  </Box>
);

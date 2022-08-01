import React, { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { Link } from '@/components/Link/Link';

interface Props {
  sx?: SxProps<Theme>;
}

export const Footer: FunctionComponent<Props> = ({ sx }) => (
  <Box
    component="footer"
    sx={[
      { display: 'flex', justifyContent: 'center' },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <Typography color="textSecondary" variant="caption">
      Copyright &copy; 2017-2022 doomsday.wiki contributors. Read the notice
      about <Link href="/license">licenses and resources</Link>.
    </Typography>
  </Box>
);

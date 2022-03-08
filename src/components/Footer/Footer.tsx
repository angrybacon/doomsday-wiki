import React, { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';
import { Link } from '@/components/Link/Link';

interface Props {
  sx?: SystemStyleObject;
}

export const Footer: FunctionComponent<Props> = ({ sx }) => (
  <Box
    component="footer"
    sx={{ display: 'flex', justifyContent: 'center', ...sx }}
  >
    <Typography color="textSecondary" variant="caption">
      Copyright &copy; 2017-2022 ddft.wiki contributors. Read the notice about{' '}
      <Link href="/license">licenses and resources</Link>.
    </Typography>
  </Box>
);

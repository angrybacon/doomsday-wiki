import { Stack, Typography } from '@mui/material';
import { type Metadata } from 'next';

import { SpoilsCalculator } from '@/components/SpoilsCalculator/SpoilsCalculator';
import { PhyrexianRemapper } from './PhyrexianRemapper';

export const metadata: Metadata = {
  title: 'Sandbox',
};

export default () => (
  <Stack gap={3}>
    <Typography component="em">
      This page is not officially part of the Wiki and serves as repository for
      interactive content until a better location for it is found.
    </Typography>
    <Typography variant="h3">Spoils Calculator</Typography>
    <Typography>
      Estimate the likelihood of success with <em>Spoils of the Vault</em> on
      the stack looking for a specific card within the current library for the
      given copies left.
    </Typography>
    <SpoilsCalculator />
    <Typography variant="h3">Phyrexian Remapper</Typography>
    <Typography>
      This is not a translator. This simply remaps latin characters with
      Phyrexian scripture but has no semantic accuracy and comes with no claim
      at being accurate nor official. See the license for credits.
    </Typography>
    <PhyrexianRemapper />
  </Stack>
);

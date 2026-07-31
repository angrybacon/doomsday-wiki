'use client';

import type { Toc as TocModel } from '@korumite/kiwi';

import { Box, Drawer, Typography, useScrollTrigger } from '@mui/material';
import { useCallback, useEffect } from 'react';

import { Divider } from '~/components/Divider/Divider';
import { Entries, Entry } from '~/components/Toc/Entries';
import { useLayout } from '~/hooks/useLayout';
import { useToc } from '~/hooks/useToc';
import { TOC_WIDTH, TOOLBAR_HEIGHT } from '~/theme/constants';

type Props = {
  toc: TocModel;
};

export const Toc = ({ toc }: Props) => {
  const { showTable, toggleTable } = useLayout();
  const { id } = useToc({ query: 'h2[id], h3[id]' });
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 500 });

  const onJump = useCallback(() => toggleTable(false)(), [toggleTable]);

  useEffect(() => {
    toggleTable(false)();
    return () => toggleTable(null)();
  }, [toggleTable]);

  if (!toc.items) return null;

  const table = (
    <Box
      component="nav"
      sx={(theme) => ({
        height: 1,
        overflowBlock: 'auto',
        overscrollBehaviorBlock: 'contain',
        p: 2,
        scrollBehavior: 'smooth',
        scrollPaddingBlock: { xs: theme.spacing(3), md: theme.spacing(2) },
        scrollbarWidth: 'thin',
        'a, h2': { px: 1, py: 0.5 },
      })}
    >
      <Typography
        component="h2"
        variant="overline"
        sx={{ color: 'text.secondary' }}
      >
        Table of Contents
      </Typography>
      <Entries current={id} entries={toc.items} onJump={onJump} root />
      {trigger && (
        <>
          <Divider sx={{ my: 1 }} />
          <Entry onJump={onJump} title="Back to top" url="#root" />
        </>
      )}
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="right"
        onClose={toggleTable(false)}
        open={showTable}
        slotProps={{
          paper: {
            sx: {
              'li, ol': { gap: 1 },
              maxWidth: '60vw',
            },
          },
        }}
        variant="temporary"
      >
        {table}
      </Drawer>
      <Box
        aria-label="Table of contents"
        component="aside"
        id="toc"
        sx={{
          borderLeft: 1,
          borderLeftColor: 'divider',
          bottom: 0,
          display: { xs: 'none', md: 'block' },
          position: 'fixed',
          right: 0,
          top: TOOLBAR_HEIGHT,
          width: TOC_WIDTH,
        }}
      >
        {table}
      </Box>
    </>
  );
};

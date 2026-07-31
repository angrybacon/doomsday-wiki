'use client';

import type { PropsWithChildren } from 'react';

import { Box, Drawer as MuiDrawer, drawerClasses } from '@mui/material';

import { useLayout } from '~/hooks/useLayout';
import { SIDEBAR_WIDTH } from '~/theme/constants';

export const Sidebar = ({ children }: PropsWithChildren) => {
  const { hasMenu, toggleMenu } = useLayout();
  // NOTE This implementation renders the links twice in the DOM
  return (
    <Box
      aria-label="Sidebar"
      component="aside"
      sx={{ flexShrink: { md: 0 }, width: { md: SIDEBAR_WIDTH } }}
    >
      <MuiDrawer
        onClose={() => toggleMenu(false)}
        open={hasMenu}
        slotProps={{ root: { keepMounted: true } }}
        sx={{
          display: { xs: 'block', md: 'none' },
          maxWidth: '80vw',
          [`.${drawerClasses.paper}`]: { width: SIDEBAR_WIDTH },
        }}
        variant="temporary"
      >
        {children}
      </MuiDrawer>
      <MuiDrawer
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          [`.${drawerClasses.paper}`]: { width: SIDEBAR_WIDTH },
        }}
        variant="permanent"
      >
        {children}
      </MuiDrawer>
    </Box>
  );
};

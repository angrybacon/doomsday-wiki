'use client';

import {
  Box,
  drawerClasses,
  Drawer as MuiDrawer,
  type SxProps,
  type Theme,
} from '@mui/material';
import { type PropsWithChildren } from 'react';

import { useLayout } from '@/hooks/useLayout';

const WIDTH = 280;

const DRAWER_STYLES: SxProps<Theme> = ({ mixins, vars }) => ({
  [`.${drawerClasses.paper}`]: {
    ...mixins.blur('strong'),
    bgcolor: `rgba(${vars.palette.background.paperChannel} / .75)`,
    width: WIDTH,
  },
});

export const Sidebar = ({ children }: PropsWithChildren) => {
  const { hasMenu, toggleMenu } = useLayout();
  // NOTE This implementation renders the links twice in the DOM
  return (
    <Box sx={{ flexShrink: { md: 0 }, width: { md: WIDTH } }}>
      <MuiDrawer
        onClose={toggleMenu(false)}
        open={hasMenu}
        slotProps={{ root: { keepMounted: true } }}
        sx={[
          DRAWER_STYLES,
          { display: { xs: 'block', md: 'none' }, maxWidth: '80vw' },
        ]}
        variant="temporary"
      >
        {children}
      </MuiDrawer>
      <MuiDrawer
        open
        sx={[DRAWER_STYLES, { display: { xs: 'none', md: 'block' } }]}
        variant="permanent"
      >
        {children}
      </MuiDrawer>
    </Box>
  );
};

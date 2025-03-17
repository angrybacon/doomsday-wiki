'use client';

import { Box, drawerClasses, Drawer as MuiDrawer } from '@mui/material';
import { type PropsWithChildren } from 'react';

import { useLayout } from '@/hooks/useLayout';

const WIDTH = 280;
const DRAWER_STYLES = { [`.${drawerClasses.paper}`]: { width: WIDTH } };

export const Sidebar = ({ children }: PropsWithChildren) => {
  const { isOpen, onClose } = useLayout();

  return (
    <Box sx={{ flexShrink: { md: 0 }, width: { md: WIDTH } }}>
      <MuiDrawer
        ModalProps={{ keepMounted: true }}
        onClose={onClose}
        open={isOpen}
        variant="temporary"
        sx={[DRAWER_STYLES, { display: { xs: 'block', md: 'none' } }]}
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

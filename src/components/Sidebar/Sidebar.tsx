import NextLink from 'next/link';
import React from 'react';
import type { FunctionComponent } from 'react';
import { mdiNewspaperVariantMultiple } from '@mdi/js';
import {
  Box,
  Divider,
  Drawer,
  DrawerProps,
  List,
  drawerClasses,
} from '@mui/material';
import { SidebarEntry } from '@/components/Sidebar/SidebarEntry';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarRosetta } from '@/components/Sidebar/SidebarRosetta';
import type { Menu } from '@/tools/markdown/types';

interface Props {
  category: string;
  isMobile?: boolean;
  isOpen?: boolean;
  menu: Menu;
  onClose: () => void;
}

export const Sidebar: FunctionComponent<Props> = ({
  category,
  isMobile,
  isOpen,
  menu,
  onClose,
}) => {
  const drawerProps: DrawerProps = isMobile
    ? {
        ModalProps: { keepMounted: true },
        onClose,
        open: isOpen,
        variant: 'temporary',
      }
    : { open: true, variant: 'permanent' };

  return (
    <Drawer
      sx={{
        [`.${drawerClasses.paper}`]: { width: (theme) => theme.drawer.width },
      }}
      {...drawerProps}
    >
      <SidebarHeader onClose={onClose} />
      <Divider />
      <Box sx={{ overflowY: 'auto' }}>
        <List component="nav" dense>
          {menu.map((entry) => (
            <SidebarEntry key={`entry-${entry.category}`} {...entry} />
          ))}
          <NextLink href="/articles" passHref>
            <SidebarEntry
              component="a"
              icon={mdiNewspaperVariantMultiple}
              subtitle="Article Archive"
              title="Articles"
            />
          </NextLink>
        </List>
        <Divider />
        <SidebarRosetta sx={{ my: 2 }} category={category} />
      </Box>
    </Drawer>
  );
};

import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';
import { mdiNewspaperVariantMultiple } from '@mdi/js';
import {
  Divider,
  Drawer,
  DrawerProps,
  List,
  drawerClasses,
} from '@mui/material';
import { SidebarEntry } from '@/components/Sidebar/SidebarEntry';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import type { Menu } from '@/tools/markdown/types';

interface Props {
  isMobile?: boolean;
  isOpen?: boolean;
  menu: Menu;
  onClose: () => void;
}

export const Sidebar: FunctionComponent<Props> = ({
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
        [`& .${drawerClasses.paper}`]: { width: (theme) => theme.drawer.width },
      }}
      {...drawerProps}
    >
      <SidebarHeader onClose={onClose} />
      <Divider />
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
    </Drawer>
  );
};

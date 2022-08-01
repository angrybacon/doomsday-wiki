import NextLink from 'next/link';
import React from 'react';
import type { FunctionComponent, ReactNode } from 'react';
import { mdiNewspaperVariantMultiple } from '@mdi/js';
import {
  Box,
  Divider,
  Drawer,
  DrawerProps,
  List,
  drawerClasses,
} from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { SidebarEntry } from '@/components/Sidebar/SidebarEntry';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarRosetta } from '@/components/Sidebar/SidebarRosetta';
import { darkTheme } from '@/theme/theme';
import type { Menu } from '@/tools/markdown/types';

interface Props {
  category: string;
  isClear: boolean;
  isMobile?: boolean;
  isOpen?: boolean;
  menu: Menu;
  onClose: () => void;
}

export const Sidebar: FunctionComponent<Props> = ({
  category,
  isClear,
  isMobile = false,
  isOpen,
  menu,
  onClose,
}) => {
  const sx: SxProps<Theme> = (theme: Theme) => ({
    [`.${drawerClasses.paper}`]: [
      { width: theme.drawer.width },
      isClear && !isMobile && { background: 'none' },
    ],
  });

  const sxBody: SxProps<Theme> = [
    { color: 'text.primary', flexGrow: 1, overflowY: 'auto' },
    isClear && !isMobile && { backdropFilter: 'blur(24px)' },
  ];

  const sxHeader: SxProps<Theme> = [
    { backgroundColor: ({ palette }: Theme) => palette.background.paper },
    (!isClear || isMobile) && {
      borderBottomColor: ({ palette }: Theme) => palette.divider,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
    },
  ];

  const drawerProps: DrawerProps = isMobile
    ? {
        ModalProps: { keepMounted: true },
        onClose,
        open: isOpen,
        variant: 'temporary',
      }
    : { open: true, variant: 'permanent' };

  const body: ReactNode = (
    <Box sx={sxBody}>
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
  );

  return (
    <Drawer sx={sx} {...drawerProps}>
      <SidebarHeader sx={sxHeader} onClose={onClose} />
      {isClear && !isMobile ? (
        <MuiThemeProvider theme={darkTheme}>{body}</MuiThemeProvider>
      ) : (
        body
      )}
    </Drawer>
  );
};

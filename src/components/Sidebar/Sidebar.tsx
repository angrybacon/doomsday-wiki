import {
  Box,
  Divider,
  Drawer,
  drawerClasses,
  List,
  ThemeProvider as MuiThemeProvider,
  type DrawerProps,
} from '@mui/material';
import NextLink from 'next/link';
import { type FunctionComponent } from 'react';

import { SidebarEntry } from '@/components/Sidebar/SidebarEntry';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarRosetta } from '@/components/Sidebar/SidebarRosetta';
import { darkTheme } from '@/theme/theme';
import { type CATEGORIES } from '@/tools/markdown/constants';
import { type MenuEntry } from '@/tools/markdown/types';

type Props = {
  category: (typeof CATEGORIES)[number] | undefined;
  isClear: boolean;
  isMobile?: boolean;
  isOpen?: boolean;
  menu: MenuEntry[];
  onClose: () => void;
};

export const Sidebar: FunctionComponent<Props> = ({
  category,
  isClear,
  isMobile = false,
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

  const body = (
    <Box
      sx={[
        { color: 'text.primary', flexGrow: 1, overflowY: 'auto' },
        isClear && !isMobile && { backdropFilter: 'blur(24px)' },
      ]}
    >
      <List component="nav" dense>
        {menu.map((entry) => (
          <SidebarEntry key={`entry-${entry.category}`} {...entry} />
        ))}
        <SidebarEntry
          component={NextLink}
          href="/articles"
          subtitle="Article Archive"
          title="Articles"
        />
      </List>
      <Divider />
      <SidebarRosetta sx={{ my: 2 }} category={category} />
    </Box>
  );

  return (
    <Drawer
      sx={({ drawer }) => ({
        [`.${drawerClasses.paper}`]: [
          { width: drawer.width },
          isClear && !isMobile && { background: 'none' },
        ],
      })}
      {...drawerProps}
    >
      <SidebarHeader
        sx={[
          { backgroundColor: 'background.paper' },
          (!isClear || isMobile) && { borderBottom: 1, borderColor: 'divider' },
        ]}
        onClose={onClose}
      />
      {isClear && !isMobile ? (
        <MuiThemeProvider theme={darkTheme}>{body}</MuiThemeProvider>
      ) : (
        body
      )}
    </Drawer>
  );
};

import NextLink from 'next/link';
import type { FunctionComponent, ReactNode } from 'react';
import {
  Box,
  Divider,
  Drawer,
  DrawerProps,
  List,
  drawerClasses,
} from '@mui/material';
import {
  ThemeProvider as MuiThemeProvider,
  type Theme,
} from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { SidebarEntry } from '@/components/Sidebar/SidebarEntry';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarRosetta } from '@/components/Sidebar/SidebarRosetta';
import { darkTheme } from '@/theme/theme';
import type { MenuEntry } from '@/tools/markdown/types';

interface Props {
  category: string | undefined;
  isClear: boolean;
  isMobile?: boolean;
  isOpen?: boolean;
  menu: MenuEntry[];
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
  const sx: SxProps<Theme> = ({ drawer }) => ({
    [`.${drawerClasses.paper}`]: [
      { width: drawer.width },
      isClear && !isMobile && { background: 'none' },
    ],
  });

  const sxBody: SxProps<Theme> = [
    { color: 'text.primary', flexGrow: 1, overflowY: 'auto' },
    isClear && !isMobile && { backdropFilter: 'blur(24px)' },
  ];

  const sxHeader: SxProps<Theme> = [
    { backgroundColor: ({ palette }) => palette.background.paper },
    (!isClear || isMobile) && {
      borderBottomColor: ({ palette }) => palette.divider,
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

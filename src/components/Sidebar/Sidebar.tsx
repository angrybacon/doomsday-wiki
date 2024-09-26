import {
  Box,
  Divider,
  Drawer,
  drawerClasses,
  List,
  ThemeProvider as MuiThemeProvider,
  type DrawerProps,
} from '@mui/material';
import { type FunctionComponent } from 'react';

import { Entry } from '@/components/Sidebar/Entry';
import { EntryAsLink } from '@/components/Sidebar/EntryAsLink';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarRosetta } from '@/components/Sidebar/SidebarRosetta';
import { darkTheme } from '@/theme/theme';
import { type CATEGORIES } from '@/tools/markdown/constants';
import { type MENU } from '@/tools/markdown/menu';

/**
 * Decorate menu entries with a pretty title and subtitle.
 * Omitting an entry simply hides it from the menu.
 */
const DECORATIONS: Partial<
  Record<(typeof CATEGORIES)[number], { subtitle: string; title: string }>
> =
  // prettier-ignore
  {
  APPENDICES: { subtitle: 'Other Resources',             title: 'Appendices' },
  DDFT:       { subtitle: 'Doomsday Fetchland Tendrils', title: 'DDFT' },
  ENTOMBSDAY: { subtitle: 'Tin Fins Hybrid',             title: 'Entombsday' },
  MEANDECK:   { subtitle: 'Force of Will Doomsday',      title: 'Doomsday' },
};

type Props = {
  category: (typeof CATEGORIES)[number] | undefined;
  isClear: boolean;
  isMobile?: boolean;
  isOpen?: boolean;
  menu: typeof MENU;
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
        {menu.map(
          (entry) =>
            DECORATIONS[entry.id] && (
              <Entry
                chapter={entry.id}
                key={`entry-${entry.id}`}
                pages={entry.pages}
                {...DECORATIONS[entry.id]}
              />
            ),
        )}
        <EntryAsLink
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

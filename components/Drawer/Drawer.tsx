import { Box, Button, Divider, List, Toolbar } from '@mui/material';
import NextLink from 'next/link';

import { Entry } from '@/components/Sidebar/Entry';
import { EntryAsLink } from '@/components/Sidebar/EntryAsLink';
import { SidebarRosetta } from '@/components/Sidebar/SidebarRosetta';
import { Themes } from '@/components/Themes/Themes';
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
  menu: typeof MENU;
};

export const Drawer = ({ menu }: Props) => (
  <>
    <Toolbar
      sx={{
        gap: 0.5,
        justifyContent: 'space-between',
        px: { xs: 1, md: 2 },
        '> *': { height: 34 },
      }}
    >
      <Button
        component={NextLink}
        disableElevation
        href="/"
        size="small"
        sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        variant="contained"
      >
        doomsday.wiki
      </Button>
      <Themes />
    </Toolbar>
    <Divider />
    <Box sx={{ overflowY: 'auto' }}>
      <List component="nav" dense>
        {menu.map(
          (entry) =>
            DECORATIONS[entry.id] && (
              <Entry
                chapter={entry.id.toLowerCase()}
                key={entry.id}
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
      <SidebarRosetta sx={{ my: 2 }} />
    </Box>
  </>
);

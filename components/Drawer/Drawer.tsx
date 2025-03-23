import { Icon } from '@mdi/react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  Toolbar,
  Tooltip,
} from '@mui/material';
import NextLink from 'next/link';
import { siDiscord } from 'simple-icons';

import { Rosetta } from '@/components/Rosetta/Rosetta';
import { Entry } from '@/components/Sidebar/Entry';
import { EntryAsLink } from '@/components/Sidebar/EntryAsLink';
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
        gap: 1,
        justifyContent: 'space-between',
        // NOTE Use a media query in order to overwrite toolbar padding
        px: { xs: 2 },
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
      <NextLink href="/discord" target="_blank">
        <Tooltip title="Join our Discord server">
          <IconButton>
            <Icon path={siDiscord.path} size={0.7} />
          </IconButton>
        </Tooltip>
      </NextLink>
    </Toolbar>
    <Divider />
    <Box sx={{ overflowY: 'auto', scrollbarWidth: 'thin' }}>
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
      <Rosetta sx={{ my: 2 }} />
    </Box>
  </>
);

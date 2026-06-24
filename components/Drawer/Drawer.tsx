'use client';

import type { MENU } from '@/tools/markdown/menu';
import type { Category } from '@/tools/markdown/schemas';

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

/**
 * Decorate menu entries with a pretty title and subtitle.
 * Omitting an entry simply hides it from the menu.
 */
const DECORATIONS: Partial<
  Record<Category, { subtitle: string; title: string }>
> =
  // prettier-ignore
  {
  APPENDICES: { subtitle: 'Other Resources',             title: 'Appendices' },
  DDFT:       { subtitle: 'Doomsday Fetchland Tendrils', title: 'DDFT' },
  ENTOMBSDAY: { subtitle: 'Tin Fins Hybrid',             title: 'Entombsday' },
  MEANDECK:   { subtitle: 'Force of Will Doomsday',      title: 'Doomsday' },
};

type Props = {
  clock: string;
  menu: typeof MENU;
};

export const Drawer = ({ clock, menu }: Props) => (
  <>
    <Toolbar
      sx={{
        gap: 1,
        justifyContent: 'space-between',
        // NOTE Use a media query in order to overwrite toolbar padding
        px: { xs: 2 },
      }}
    >
      <Tooltip title={clock}>
        <Button
          disableElevation
          href="/"
          size="small"
          sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
          variant="contained"
        >
          doomsday.wiki
        </Button>
      </Tooltip>
      <Tooltip title="Join our Discord server">
        <IconButton component={NextLink} href="/discord" target="_blank">
          <Icon path={siDiscord.path} size={0.6} />
        </IconButton>
      </Tooltip>
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

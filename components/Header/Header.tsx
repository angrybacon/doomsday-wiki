'use client';

import { mdiMenu } from '@mdi/js';
import { Icon } from '@mdi/react';
import { AppBar, Divider, IconButton, Toolbar, Tooltip } from '@mui/material';
import NextLink from 'next/link';
import { siDiscord } from 'simple-icons';

import { useLayout } from '@/hooks/useLayout';

export const Header = () => {
  const { onOpen } = useLayout();
  return (
    <AppBar
      elevation={0}
      enableColorOnDark
      sx={(theme) => ({
        ...theme.mixins.blur('weak'),
        bgcolor: `rgba(${theme.vars.palette.background.paperChannel} / .5)`,
      })}
    >
      <Toolbar>
        <IconButton
          aria-label="Open menu"
          onClick={onOpen}
          sx={{ display: { md: 'none' } }}
        >
          <Icon path={mdiMenu} size={1} />
        </IconButton>
        <Tooltip title="Join our Discord server">
          <IconButton
            component={NextLink}
            href="/discord"
            size="large"
            sx={{ ml: 'auto' }}
            target="_blank"
          >
            <Icon path={siDiscord.path} size={0.7} />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

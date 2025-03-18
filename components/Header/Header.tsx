'use client';

import { mdiMenu } from '@mdi/js';
import { Icon } from '@mdi/react';
import { AppBar, Divider, IconButton, Toolbar } from '@mui/material';

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
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

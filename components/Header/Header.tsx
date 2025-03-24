'use client';

import { mdiMenu, mdiMenuOpen } from '@mdi/js';
import { Icon } from '@mdi/react';
import { AppBar, Divider, IconButton, Toolbar, Tooltip } from '@mui/material';

import { useLayout } from '@/hooks/useLayout';

export const Header = () => {
  const { hasTable, toggleMenu, toggleTable } = useLayout();
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
          onClick={toggleMenu(true)}
          sx={{ display: { md: 'none' } }}
        >
          <Icon path={mdiMenu} size={0.6} />
        </IconButton>
        {hasTable !== null && (
          // NOTE We update accessibility data but the icon doesn't matter as no
          //      one will actually see it.
          <Tooltip title={`${hasTable ? 'Close' : 'Open'} table of contents`}>
            <IconButton
              onClick={toggleTable()}
              sx={{ display: { sm: 'none' }, ml: 'auto' }}
            >
              <Icon path={mdiMenuOpen} size={0.6} />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

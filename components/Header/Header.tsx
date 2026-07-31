'use client';

import { mdiMenu, mdiMenuOpen } from '@mdi/js';
import { Icon } from '@mdi/react';
import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material';

import { useLayout } from '~/hooks/useLayout';

export const Header = () => {
  const { hasTable, showTable, toggleMenu, toggleTable } = useLayout();
  return (
    <AppBar
      color="transparent"
      elevation={0}
      enableColorOnDark
      position="sticky"
    >
      <Toolbar
        sx={(theme) => ({
          ...theme.mixins.blur('weak'),
          bgcolor: 'rgba(var(--mui-palette-background-paperChannel) / .5)',
          borderBottom: 1,
          borderColor: 'divider',
        })}
      >
        <IconButton
          aria-label="Open menu"
          onClick={() => toggleMenu(true)}
          sx={{ display: { md: 'none' } }}
        >
          <Icon path={mdiMenu} size={1} />
        </IconButton>
        {hasTable && (
          <Tooltip title={`${showTable ? 'Close' : 'Open'} table of contents`}>
            <IconButton
              onClick={toggleTable()}
              sx={{ display: { md: 'none' }, ml: 'auto' }}
            >
              <Icon
                // NOTE We update accessibility data but the icon doesn't matter
                //      as no one will actually _see_ it.
                path={mdiMenuOpen}
                size={1}
              />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};

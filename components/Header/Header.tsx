'use client';

import MenuOpenIcon from '@mui/icons-material/MenuOpenRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
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
          bgcolor: 'rgb(var(--mui-palette-background-paperChannel) / .5)',
          borderBottom: 1,
          borderColor: 'divider',
        })}
      >
        <IconButton
          aria-label="Open menu"
          onClick={() => toggleMenu(true)}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        {hasTable && (
          <Tooltip title={`${showTable ? 'Close' : 'Open'} table of contents`}>
            <IconButton
              onClick={toggleTable()}
              sx={{ display: { md: 'none' }, ml: 'auto' }}
            >
              <MenuOpenIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};

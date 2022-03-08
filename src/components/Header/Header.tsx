import React, { FunctionComponent } from 'react';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { AppBar, IconButton, Slide, Toolbar } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  /** Whether the header should be left-padded. */
  isMobile: boolean;
  /** Open the drawer in mobile viewport. */
  onSidebarOpen: () => void;
}

export const Header: FunctionComponent<Props> = ({
  isMobile,
  onSidebarOpen,
}) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        elevation={4}
        position="sticky"
        sx={[{ pl: (theme) => theme.drawer.width }, isMobile && { pl: 0 }]}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={onSidebarOpen}
              sx={{ mr: 1 }}
            >
              <Icon path={mdiMenu} size={1} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

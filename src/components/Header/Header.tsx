import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { type FunctionComponent } from 'react';

import { Progress } from '@/components/Progress/Progress';

type Props = {
  isMobile: boolean;
  onSidebarOpen: () => void;
  withProgress?: boolean;
};

export const Header: FunctionComponent<Props> = ({
  isMobile,
  onSidebarOpen,
  withProgress = false,
}) => {
  const theme = useTheme();
  const offset = isMobile ? 0 : theme.drawer.width;
  return (
    <>
      <AppBar
        elevation={4}
        sx={({ palette }) => ({
          backdropFilter: 'blur(12px)',
          backgroundColor: alpha(palette.background.paper, 0.75),
          pl: offset,
        })}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              aria-label="Menu"
              onClick={onSidebarOpen}
              sx={{ mr: 1 }}
            >
              <Icon path={mdiMenu} size={1} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Box role="presentation" sx={({ mixins }) => mixins.toolbar} />
      {withProgress && (
        <Box
          sx={{
            left: offset,
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: ({ zIndex }) => zIndex.appBar,
          }}
        >
          <Progress />
        </Box>
      )}
    </>
  );
};

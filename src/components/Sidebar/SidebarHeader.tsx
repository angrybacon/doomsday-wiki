import NextLink from 'next/link';
import { FunctionComponent, useContext } from 'react';
import { siDiscord } from 'simple-icons';
import { mdiLightbulbOff, mdiLightbulbOn } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box, Button, IconButton, Toolbar, Tooltip } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { ThemeContext } from '@/theme/ThemeContext';

interface Props {
  onClose: () => void;
  sx?: SxProps<Theme>;
}

export const SidebarHeader: FunctionComponent<Props> = ({ onClose, sx }) => {
  const { isDark, toggle } = useContext(ThemeContext);

  const onThemeToggle = () => {
    toggle();
    onClose();
  };

  return (
    <Toolbar
      sx={[
        { alignItems: 'center', display: 'flex', px: { xs: 1, md: 2 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Button
        color="primary"
        component={NextLink}
        disableElevation
        href="/"
        size="small"
        variant="contained"
      >
        doomsday.wiki
      </Button>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: 'auto',
          '&& > *': { ml: 1 }, // NOTE Increase specificity
        }}
      >
        <Tooltip arrow title="Join our Discord server">
          <IconButton
            component={NextLink}
            href="/discord"
            size="large"
            target="_blank"
          >
            <Icon path={siDiscord.path} size={0.7} />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
          <IconButton onClick={onThemeToggle} size="large">
            <Icon path={isDark ? mdiLightbulbOn : mdiLightbulbOff} size={0.7} />
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
  );
};

import NextLink from 'next/link';
import React, { FunctionComponent, useContext } from 'react';
import { mdiDiscord, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box, Button, IconButton, Toolbar, Tooltip } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { ThemeContext } from '@/theme/ThemeContext';

const DISCORD_URL = 'https://discord.gg/vajvFXt';

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
      <NextLink href="/" passHref>
        <Button
          color="primary"
          disableElevation
          size="small"
          variant="contained"
        >
          doomsday.wiki
        </Button>
      </NextLink>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: 'auto',
          '> *': { ml: 1 },
        }}
      >
        <Tooltip arrow title="Join our Discord server">
          <a href={DISCORD_URL} rel="noopener noreferrer" target="_blank">
            <IconButton size="large">
              <Icon path={mdiDiscord} size={0.8} />
            </IconButton>
          </a>
        </Tooltip>
        <Tooltip arrow title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
          <IconButton onClick={onThemeToggle} size="large">
            <Icon
              path={isDark ? mdiWeatherSunny : mdiWeatherNight}
              size={0.8}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
  );
};

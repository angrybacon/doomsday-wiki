import NextLink from 'next/link';
import React, { FunctionComponent, useContext } from 'react';
import {
  mdiDiscord,
  mdiNewspaperVariantMultiple,
  mdiWeatherNight,
  mdiWeatherSunny,
} from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerProps,
  IconButton,
  List,
  Toolbar,
  Tooltip,
  drawerClasses,
} from '@mui/material';
import { Entry } from '@/components/Sidebar/Entry';
import { ThemeContext } from '@/theme/ThemeContext';
import type { Menu } from '@/tools/markdown/types';

const DISCORD_URL = 'https://discord.gg/vajvFXt';

interface Props {
  /** Whether the drawer should be permanent. */
  isMobile?: boolean;
  /** Whether the drawer should be open in mobile viewport. */
  isOpen?: boolean;
  /** Content of the drawer menu. */
  menu: Menu;
  /** Close the drawer in mobile viewport. */
  onClose: () => void;
}

export const Sidebar: FunctionComponent<Props> = ({
  isMobile,
  isOpen,
  menu,
  onClose,
}) => {
  const { isDark, toggle } = useContext(ThemeContext);

  const onThemeToggle = () => {
    toggle();
    onClose();
  };

  const drawerProps: DrawerProps = isMobile
    ? {
        ModalProps: { keepMounted: true },
        onClose,
        open: isOpen,
        variant: 'temporary',
      }
    : { open: true, variant: 'permanent' };

  return (
    <Drawer
      sx={{
        [`& .${drawerClasses.paper}`]: { width: (theme) => theme.drawer.width },
      }}
      {...drawerProps}
    >
      <Toolbar
        sx={{
          alignItems: 'center',
          display: 'flex',
          pl: { xs: 1, md: 2 },
          pr: { xs: 1, md: 2 },
        }}
      >
        <NextLink href="/" passHref>
          <Button
            color="primary"
            disableElevation
            size="small"
            variant="contained"
          >
            ddft.wiki
          </Button>
        </NextLink>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            ml: 'auto',
            '& > :not(:first-child)': { ml: 1 },
          }}
        >
          <Tooltip arrow title="Discord">
            <a href={DISCORD_URL} rel="noreferrer" target="_blank">
              <IconButton aria-label="Discord" size="large">
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
      <Divider />
      <List component="nav" dense>
        {menu.map((entry) => (
          <Entry key={`entry-${entry.id}`} {...entry} />
        ))}
        <NextLink href="/articles" passHref>
          <Entry
            component="a"
            icon={mdiNewspaperVariantMultiple}
            subtitle="Article Archive"
            title="Articles"
          />
        </NextLink>
      </List>
      <Divider />
    </Drawer>
  );
};

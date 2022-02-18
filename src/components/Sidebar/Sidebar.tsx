import NextLink from 'next/link';
import React, { FunctionComponent, useContext } from 'react';
import {
  mdiDiscord,
  mdiNewspaperVariantMultiple,
  mdiWeatherNight,
  mdiWeatherSunny,
} from '@mdi/js';
import { Icon } from '@mdi/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';
import { Entry } from '@/components/Sidebar/Entry';
import { ThemeContext } from '@/theme/ThemeContext';
import type { Menu } from '@/tools/markdown/types';
import { useStyles } from './Sidebar.styles';

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
  const classes = useStyles();
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
    <Drawer classes={{ paper: classes.paper }} {...drawerProps}>
      <Box alignItems="center" display="flex" className={classes.header}>
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
          alignItems="center"
          className={classes.actions}
          display="flex"
          ml="auto"
        >
          <Tooltip arrow title="Discord">
            <a href={DISCORD_URL} rel="noreferrer" target="_blank">
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
      </Box>
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

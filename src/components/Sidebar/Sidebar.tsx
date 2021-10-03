import NextLink from 'next/link';
import React, { FunctionComponent, useContext } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import {
  mdiDiscord,
  mdiNewspaperVariantMultiple,
  mdiWeatherNight,
  mdiWeatherSunny,
} from '@mdi/js';
import { Icon } from '@mdi/react';
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

  const drawer = (
    <>
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
          <a href={DISCORD_URL} rel="noreferrer" target="_blank">
            <IconButton>
              <Icon path={mdiDiscord} size={0.8} />
            </IconButton>
          </a>
          <IconButton onClick={onThemeToggle}>
            <Icon
              path={isDark ? mdiWeatherSunny : mdiWeatherNight}
              size={0.8}
            />
          </IconButton>
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
    </>
  );

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
      {drawer}
    </Drawer>
  );
};

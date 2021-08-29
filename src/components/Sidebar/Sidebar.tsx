import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { mdiNewspaperVariantMultiple } from '@mdi/js';
import { Entry } from '@/components/Sidebar/Entry';
import type { Menu } from '@/tools/markdown/types';
import { useStyles } from './Sidebar.styles';

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

  const drawer = (
    <>
      <Box alignItems="center" display="flex" className={classes.header}>
        <Link href="/" passHref>
          <Button
            color="primary"
            disableElevation
            size="small"
            variant="contained"
          >
            ddft.wiki
          </Button>
        </Link>
      </Box>
      <Divider />
      <List component="nav" dense>
        {menu.map((entry) => (
          <Entry key={`entry-${entry.title}`} {...entry} />
        ))}
        <Link href="/articles" passHref>
          <Entry
            component="a"
            icon={mdiNewspaperVariantMultiple}
            subtitle="Article Archive"
            title="Articles"
          />
        </Link>
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

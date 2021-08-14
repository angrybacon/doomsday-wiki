import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Entry } from '@/components/Sidebar/Entry';
import type { ChapterEntry } from '@/tools/markdown/types';
import { useStyles } from '@/components/Sidebar/Sidebar.styles';

interface Props {
  /** Content of the drawer menu. */
  chapters: ChapterEntry[];
  /** Whether the drawer should be permanent. */
  isMobile?: boolean;
  /** Whether the drawer should be open in mobile viewport. */
  isOpen?: boolean;
  /** Close the drawer in mobile viewport. */
  onClose: () => void;
}

export const Sidebar: FunctionComponent<Props> = ({
  chapters,
  isMobile,
  isOpen,
  onClose,
}) => {
  const classes = useStyles();
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
      </Box>
      <Divider />
      <List component="nav" dense>
        {chapters.map((chapter) => (
          <Entry key={`chapter-${chapter.title}`} {...chapter} />
        ))}
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

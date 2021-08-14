import React, { FunctionComponent } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { SidebarEntry } from '@/components/Sidebar/SidebarEntry';
import type { ChapterEntry } from '@/tools/markdown/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: theme.drawer.width,
    },
    root: {
      [theme.breakpoints.up('sm')]: {
        width: theme.drawer.width,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${theme.drawer.width}px)`,
        marginLeft: theme.drawer.width,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
  })
);

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
      <div className={classes.toolbar} />
      <Divider />
      <List dense>
        {chapters.map((chapter) => (
          <SidebarEntry key={`chapter-${chapter.title}`} {...chapter} />
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
    <nav className={classes.root}>
      <Drawer classes={{ paper: classes.paper }} {...drawerProps}>
        {drawer}
      </Drawer>
    </nav>
  );
};

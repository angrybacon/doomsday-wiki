import React, { FunctionComponent } from 'react';
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
      <div className={classes.toolbar} />
      <Divider />
      <List dense>
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
    <nav className={classes.root}>
      <Drawer classes={{ paper: classes.paper }} {...drawerProps}>
        {drawer}
      </Drawer>
    </nav>
  );
};

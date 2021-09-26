import c from 'classnames';
import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useStyles } from './Header.styles';

interface Props {
  /** Whether the header should be left-padded. */
  isMobile?: boolean;
  /** Open the drawer in mobile viewport. */
  onSidebarOpen: () => void;
}

export const Header: FunctionComponent<Props> = ({
  isMobile,
  onSidebarOpen,
}) => {
  const trigger = useScrollTrigger();
  const classes = useStyles();
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={c(classes.bar, { mobile: isMobile })} elevation={4}>
          <Toolbar>
            {isMobile && (
              <IconButton
                className={classes.menu}
                color="inherit"
                onClick={onSidebarOpen}
              >
                <Icon path={mdiMenu} size={1} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
      {/* NOTE Enforce a vertical offset to account for the fixed height */}
      <div className={classes.offset} />
    </>
  );
};

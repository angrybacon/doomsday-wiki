import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
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

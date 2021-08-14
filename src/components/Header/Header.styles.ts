import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      left: theme.drawer.width,
      zIndex: theme.zIndex.drawer - 1,
      '&.mobile': {
        left: 0,
      },
    },
    menu: { marginRight: theme.spacing() },
    offset: theme.mixins.toolbar,
  })
);

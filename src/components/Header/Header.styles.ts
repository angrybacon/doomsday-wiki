import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      left: 0,
      paddingLeft: theme.drawer.width,
      zIndex: theme.zIndex.drawer - 1,
      '&.mobile': {
        paddingLeft: 0,
      },
    },
    menu: { marginRight: theme.spacing() },
    offset: theme.mixins.toolbar,
  })
);

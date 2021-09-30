import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginLeft: theme.drawer.width,
      '&.mobile': {
        marginLeft: 0,
      },
    },
    footer: {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.only('xs')]: {
      footer: {
        margin: theme.spacing(2),
      },
    },
  })
);

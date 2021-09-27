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
  })
);

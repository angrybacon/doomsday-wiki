import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > :not(:first-child)': {
        marginTop: theme.spacing(2),
      },

      '& > :last-child': {
        marginBottom: 0,
      },
    },
  })
);

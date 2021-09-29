import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      display: 'block',
      marginTop: theme.spacing(),
      textAlign: 'center',
    },
    image: {
      display: 'block',
      width: '100%',
    },
    root: {
      ...theme.mixins.barf(),
      display: 'block',
      margin: 'auto',
    },
  })
);

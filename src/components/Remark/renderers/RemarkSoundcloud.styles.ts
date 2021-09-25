import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    frame: {
      border: 'none',
      borderRadius: theme.shape.borderRadius * 2,
      display: 'block',
      width: '100%',
    },
    root: {
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
  })
);

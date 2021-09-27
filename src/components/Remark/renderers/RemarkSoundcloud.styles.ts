import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 'none',
      borderRadius: theme.shape.borderRadius * 2,
      display: 'block',
      width: '100%',
    },
  })
);

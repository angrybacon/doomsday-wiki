import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    frame: {
      border: 'none',
      borderRadius: theme.shape.borderRadius * 2,
      display: 'block',
      height: '100%',
      left: 0,
      top: 0,
      position: 'absolute',
      width: '100%',
    },
    root: {
      height: 0,
      position: 'relative',
      // NOTE Force intrinsic height to always 16/9
      paddingBottom: '56.25%',
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
  })
);

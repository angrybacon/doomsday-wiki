import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    line: {
      display: 'flex',
    },
    quantity: {
      marginRight: theme.spacing(),
      maxWidth: '1.2em',
      minWidth: '1.2em',
    },
    root: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
  })
);

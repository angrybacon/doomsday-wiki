import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& > :last-child': {
        marginBottom: 0,
      },
    },
  })
);

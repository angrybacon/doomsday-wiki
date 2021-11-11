import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    image: {
      display: 'block',
      width: '100%',
    },
    tooltip: {
      textAlign: 'center',
    },
  })
);

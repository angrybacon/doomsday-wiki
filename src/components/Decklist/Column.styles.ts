import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    line: {
      display: 'flex',
    },
    quantity: {
      maxWidth: '1.6em',
      minWidth: '1.6em',
    },
    root: {
      listStyleType: 'none',
      margin: 0,
      minWidth: 170,
      padding: 0,
    },
  })
);

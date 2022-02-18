import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
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

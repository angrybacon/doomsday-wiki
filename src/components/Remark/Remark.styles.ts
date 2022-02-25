import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      'ol, ul': {
        listStylePosition: 'outside',
        paddingLeft: theme.spacing(4),
      },
    },
    root: {
      '& > *': { marginTop: theme.spacing(2) },
      '& > :first-child': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 },
    },
  })
);

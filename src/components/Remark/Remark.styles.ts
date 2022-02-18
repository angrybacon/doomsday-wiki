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
      '& > *': {
        marginTop: theme.spacing(2),
      },
      '& > :first-child, & > :last-child': {
        marginBottom: 0,
      },
    },
  })
);

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      'ol, ul': {
        listStylePosition: 'outside',
        paddingLeft: theme.spacing(4),
      },
    },
    root: {
      '& > :not(:first-child)': {
        marginTop: theme.spacing(2),
      },
      '& > :last-child': {
        marginBottom: 0,
      },
    },
  })
);

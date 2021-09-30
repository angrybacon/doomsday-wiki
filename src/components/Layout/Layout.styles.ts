import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
      marginLeft: theme.drawer.width,
      position: 'relative',
      '&.mobile': {
        marginLeft: 0,
      },
    },
    footer: {
      marginTop: 'auto',
      padding: theme.spacing(3),
      paddingBottom: 0,
    },
    [theme.breakpoints.only('xs')]: {
      container: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
      },
      footer: {
        padding: theme.spacing(2),
        paddingBottom: 0,
      },
    },
  })
);

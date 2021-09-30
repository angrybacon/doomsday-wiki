import {
  Theme,
  alpha,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      '& > *': {
        padding: theme.spacing(1),
      },
    },

    centered: {
      justifyContent: 'space-around',
      '& $card': {
        maxWidth: '25%',
      },
    },

    container: {
      display: 'flex',
    },

    pile: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderWidth: 1,
      padding: theme.spacing(2),
      '& $card': {
        width: '20%',
      },
      [theme.breakpoints.only('xs')]: {
        padding: theme.spacing(),
      },
    },

    root: theme.mixins.barf(),
  })
);

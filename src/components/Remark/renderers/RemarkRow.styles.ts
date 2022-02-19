import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      '& > *': {
        padding: theme.spacing(),
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(0.5),
        },
      },
    },

    centered: {
      ...theme.mixins.gutters,
      justifyContent: 'space-around',
      marginLeft: theme.spacing(-1),
      marginRight: theme.spacing(-1),
      '& $card': {
        flexBasis: '25%',
        maxWidth: '25%',
      },
    },

    container: {
      display: 'flex',
    },

    pile: {
      backgroundColor: alpha(theme.palette.primary.light, 0.1),
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderWidth: 1,
      padding: theme.spacing(2),
      '& $card': {
        width: '20%',
      },
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(),
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.5),
      },
    },

    root: theme.mixins.barf,
  })
);

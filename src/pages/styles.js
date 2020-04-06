import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  root: {
    '& > :not(:first-child)': {
      marginTop: theme.spacing(3),
      [theme.mixins.sidebar.treshold]: {
        marginTop: theme.spacing(2),
      },
    },
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(3),
      [theme.mixins.sidebar.treshold]: {
        marginBottom: theme.spacing(2),
      },
    },
  },
}));

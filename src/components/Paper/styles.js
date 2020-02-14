import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
      },
    },
  },
  rounded: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
}));

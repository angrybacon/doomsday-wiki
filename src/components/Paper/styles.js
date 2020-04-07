import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  rounded: {
    ...theme.mixins.gutters(),
    [theme.mixins.sidebar.treshold]: {
      borderRadius: 0,
    },
  },
}));

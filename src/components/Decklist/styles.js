import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  content: {
    padding: [[theme.spacing(1), theme.spacing(2)]],
  },
  root: {
    backgroundColor: theme.palette.background.secondary,
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  group: {
    color: theme.palette.text.hint,
    textTransform: 'uppercase',
  },
  highlight: {
    color: theme.palette.secondary.light,
  },
  paper: {
    boxShadow: theme.shadows[6],
    padding: 0,
  },
}));

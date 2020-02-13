import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  filterGroup: {
    color: theme.palette.text.hint,
    textTransform: 'uppercase',
  },
  filterHighlight: {
    color: theme.palette.secondary.light,
  },
  filterLabelPrefix: {
    textTransform: 'lowercase',
  },
  filterPaper: {
    boxShadow: theme.shadows[6],
    padding: 0,
  },
}));

import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  barf: {
    marginLeft: -theme.overrides.MuiPaper.root.padding,
    marginRight: -theme.overrides.MuiPaper.root.padding,
    padding: 0,
  },
  content: {
    padding: [[theme.spacing(1), theme.spacing(2), theme.spacing(2)]],
  },
  root: {
    backgroundColor: theme.palette.background.secondary,
  },
}));

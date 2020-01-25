import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  barf: {
    marginLeft: -theme.overrides.MuiPaper.root.padding,
    marginRight: -theme.overrides.MuiPaper.root.padding,
  },
  deck: {
    padding: 0,
    '& > *': {
      width: '100%',
    },
  },
  panel: {
    borderColor: theme.palette.divider,
    borderBottomStyle: 'solid',
    borderTopStyle: 'solid',
    borderWidth: 1,
    padding: 0,
    position: 'inherit',
  },
  panelDetails: {
    display: 'block',
  },
}));

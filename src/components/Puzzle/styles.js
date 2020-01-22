import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  deck: {
    padding: 0,
    '& > *': {
      width: '100%',
    },
  },
  panel: {
    padding: 0,
  },
  panelDetails: {
    display: 'block',
  },
}));

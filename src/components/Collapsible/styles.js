import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  barf: {
    ...theme.mixins.barf(),
  },
  details: {
    display: 'block',
  },
  root: {
    borderBottomStyle: 'solid',
    borderColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderWidth: 1,
    padding: 0,
    position: 'inherit',
  },
  zoom: {
    '& > *': {
      width: '100%',
    },
    padding: 0,
  },
}));

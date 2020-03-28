import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  container: {
    '& > *': {
      margin: '0 auto !important',
    },
    height: '100%',
  },
  loader: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  root: {
    overflow: 'hidden',
    position: 'relative',
    transitionDuration: theme.transitions.duration.short,
    transitionProperty: 'height',
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
}));

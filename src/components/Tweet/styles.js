import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  container: {
    '& > *': {
      margin: '0 auto !important',
    },
    maxWidth: '100%',
  },
  loader: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    transitionDuration: theme.transitions.duration.standard,
    transitionProperty: 'opacity',
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
  loading: {
    opacity: 1,
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    transitionDuration: theme.transitions.duration.short,
    transitionProperty: 'height',
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
}));

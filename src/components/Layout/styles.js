import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  children: {
    flexGrow: 1,
  },
  content: {
    height: '100%',
    paddingTop: theme.spacing(3),
    [theme.mixins.sidebar.treshold]: {
      paddingTop: theme.spacing(2),
    },
  },
  footer: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    [theme.mixins.sidebar.treshold]: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
  header: {
    zIndex: 100,
  },
  main: {
    height: '100%',
    paddingLeft: theme.mixins.sidebar.width,
    width: '100%',
    [theme.mixins.sidebar.treshold]: {
      paddingLeft: 0,
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    minWidth: 320,
  },
}));

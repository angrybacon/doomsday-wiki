import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
    },
  },
  children: {
    flexGrow: 1,
  },
  content: {
    height: '100%',
  },
  footer: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
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

import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  icon: {
    marginLeft: '.25em',
  },
  link: {
    color: theme.palette.secondary[{dark: 'light', light: 'dark'}[theme.palette.type]]
  },
  root: {
    alignItems: 'center',
    display: 'inline-flex',
  },
}));

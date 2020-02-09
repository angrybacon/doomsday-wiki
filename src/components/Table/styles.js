import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  minimal: {
    borderTopStyle: 'none !important',
    '@global':  {
      'td, th': {
        borderBottomStyle: 'none',
      },
    },
  },
  root: {
    borderTopColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    marginBottom: theme.spacing(3),
    '& + &': {
      borderTopStyle: 'none',
      marginTop: -theme.spacing(3),
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

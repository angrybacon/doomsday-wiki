import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  minimal: {
    '@global':  {
      'td, th': {
        borderBottomStyle: 'none',
      },
    },
    borderTopStyle: 'none !important',
  },
  root: {
    '& + &': {
      borderTopStyle: 'none',
      marginTop: -theme.spacing(3),
    },
    '&:last-child': {
      marginBottom: 0,
    },
    borderTopColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    marginBottom: theme.spacing(3),
  },
}));

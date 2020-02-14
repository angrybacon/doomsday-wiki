import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  barf: {
    ...theme.mixins.barf(),
  },
  code: {
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    overflowY: 'auto',
    padding: theme.spacing(1),
  },
  divider: {
    marginBottom: '1em',
    marginTop: '1em',
  },
  pile: {
    display: 'flex',
    justifyContent: 'space-between',
    '@global img': {
      width: '19%',
    },
  },
  root: {
    '@global img': {
      borderRadius: '2%',
    },
  },
}));

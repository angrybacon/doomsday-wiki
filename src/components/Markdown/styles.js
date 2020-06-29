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
  image: {
    maxWidth: '100%',
  },
  row: {
    '@global *': {
      alignSelf: 'center',
    },
    '@global img': {
      borderRadius: theme.shape.borderRadius,
    },
    display: 'flex',
  },
  rowCentered: {
    '@global *': {
      width: '28%',
    },
    justifyContent: 'space-around',
  },
  rowHand: {
    '@global *': {
      padding: 1,
      width: '12%',
    },
    justifyContent: 'flex-start',
  },
  rowPile: {
    '@global *': {
      width: '19%',
    },
    justifyContent: 'space-between',
  },
}));

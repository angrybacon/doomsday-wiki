import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  card: {
    '& $cardActive': {
      backgroundColor: theme.palette.primary.main,
    },
    display: 'flex',
  },
  cardActive: {},
  cardMedia: {
    height: '100%',
  },
  cardRipple: {
    color: theme.palette.primary.main,
  },
  icon: {
    marginRight: '.5em',
  },
}));

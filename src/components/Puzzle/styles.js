import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  barf: {
    ...theme.mixins.barf(),
  },
  highlight: {
    backgroundColor: 'inherit',
    color: theme.palette.secondary.A100,
  },
  situation: {
    '& > *': {
      marginBottom: theme.spacing(1),
    },
    '& > :nth-child(2n)': {
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
      },
    },
    '& > :nth-child(2n+1)': {
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('xs')]: {
        marginBottom: 0,
      },
    },
    alignItems: 'center',
  },
}));

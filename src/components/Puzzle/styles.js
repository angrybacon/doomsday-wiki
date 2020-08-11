import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  barf: {
    ...theme.mixins.barf(),
  },
  highlight: {
    backgroundColor: 'inherit',
    color: theme.palette.secondary.A100,
  },
  root: {
    '&:not(:first-child)': {
      marginTop: theme.spacing(3),
      [theme.mixins.sidebar.treshold]: {
        marginTop: theme.spacing(2),
      },
    },
    '&:not(:last-child)': {
      marginBottom: theme.spacing(3),
      [theme.mixins.sidebar.treshold]: {
        marginBottom: theme.spacing(2),
      },
    },
  },
  situation: {
    '& > *': {
      marginBottom: theme.spacing(1),
    },
    '& > :nth-child(2n)': {
      paddingLeft: theme.spacing(1),
      [theme.mixins.sidebar.treshold]: {
        paddingLeft: 0,
      },
    },
    '& > :nth-child(2n+1)': {
      color: theme.palette.text.secondary,
      [theme.mixins.sidebar.treshold]: {
        marginBottom: 0,
      },
    },
    alignItems: 'center',
  },
}));

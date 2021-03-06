import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  barf: {
    ...theme.mixins.barf(),
  },
  details: {
    display: 'block',
  },
  root: {
    borderBottomStyle: 'solid',
    borderColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderWidth: 1,
    marginTop: [-1, '!important'],
    padding: 0,
    position: 'inherit',
  },
  summary: {
    ...theme.mixins.gutters({
      paddingBottom: 0,
      paddingTop: 0,
      [theme.mixins.sidebar.treshold]: {
        paddingBottom: 0,
        paddingTop: 0,
      },
    }),
  },
  zoom: {
    '& > *': {
      width: '100%',
    },
    padding: 0,
  },
}));

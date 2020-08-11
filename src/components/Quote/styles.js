import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    '&:before': {
      backgroundColor: theme.palette.secondary[theme.palette.type],
      borderRadius: theme.shape.borderRadius,
      bottom: 0,
      content: "''",
      display: 'block',
      left: 0,
      position: 'absolute',
      top: 0,
      width: 2,
    },
    color: theme.palette.text.secondary,
    display: 'block',
    margin: [[theme.spacing(2), 0]],
    padding: [[theme.spacing(1), 0, theme.spacing(1), theme.spacing(2)]],
    position: 'relative',
  },
}));

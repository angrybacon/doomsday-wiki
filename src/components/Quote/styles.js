import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    display: 'flex',
    margin: [[theme.spacing(2), 0]],
    padding: [[theme.spacing(1), 0]],
    '&:before': {
      backgroundColor: theme.palette.secondary[theme.palette.type],
      borderRadius: theme.shape.borderRadius,
      content: "''",
      display: 'block',
      margin: [[-theme.spacing(1), theme.spacing(2), -theme.spacing(1), 0]],
      width: 2,
    },
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  frame: {
    border: 'none',
    height: '100%',
    width: '100%',
  },
  root: {
    borderRadius: theme.shape.borderRadius,
    height: 480,
    margin: [['1em', 'auto']],
    maxHeight: '50vw',
    maxWidth: 800,
    overflow: 'hidden',
    width: '100%',
  },
}));

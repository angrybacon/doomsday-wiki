import {
  Theme,
  alpha,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      ...theme.mixins.gutters(),
      fontFamily: 'monospace',
      fontSize: '0.9em',
      margin: 0,
      padding: theme.spacing(),
    },
    inline: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      borderColor: theme.palette.divider,
      borderRadius: theme.shape.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      color: theme.palette.text.secondary,
      fontFamily: 'monospace',
      fontSize: theme.typography.body2.fontSize,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    root: {
      ...theme.mixins.barf(),
      display: 'block',
    },
  })
);

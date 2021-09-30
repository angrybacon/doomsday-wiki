import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.common.black,
      height: 0,
      position: 'relative',
      // NOTE Force intrinsic height to always be 16/9
      paddingBottom: '56.25%',
    },
    frame: {
      border: 'none',
      borderRadius: 0,
      display: 'block',
      height: '100%',
      left: 0,
      top: 0,
      position: 'absolute',
      width: '100%',
    },
    root: {
      ...theme.mixins.barf(),
      borderColor: theme.palette.divider,
      borderBottomStyle: 'solid',
      borderTopStyle: 'solid',
      borderWidth: 10,
    },
  })
);

import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      backgroundColor: alpha(theme.palette.primary.light, 0.1),
      borderTopColor: theme.palette.divider,
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    gutters: theme.mixins.gutters(),
    root: {
      ...theme.mixins.barf(),
      borderBottomWidth: 1,
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderTopWidth: 1,
      '& + &': {
        borderTopWidth: 0,
        marginTop: '0 !important',
      },
    },
  })
);

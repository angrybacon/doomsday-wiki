import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      filter: 'blur(4px)',
      height: 270,
      [theme.breakpoints.down('sm')]: {
        height: 190,
      },
    },
    root: {
      backgroundColor:
        // NOTE Add a dark background to blend the blurring effect
        theme.palette.mode === 'light' ? theme.palette.grey[700] : undefined,
      overflow: 'hidden',
      position: 'relative',
    },
    title: {
      alignItems: 'center',
      backgroundColor: alpha(theme.palette.common.black, 0.3),
      bottom: 0,
      color: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'center',
      left: 0,
      margin: 0,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      position: 'absolute',
      right: 0,
      textAlign: 'center',
      top: 0,
      [theme.breakpoints.down('lg')]: {
        fontSize: '3rem',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
  })
);

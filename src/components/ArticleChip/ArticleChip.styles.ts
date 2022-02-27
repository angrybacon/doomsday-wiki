import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      backgroundColor: theme.palette.articleKinds.article,
    },
    primer: {
      backgroundColor: theme.palette.articleKinds.primer,
    },
    report: {
      backgroundColor: theme.palette.articleKinds.report,
    },
    root: {
      color: theme.palette.common.white,
      cursor: 'unset',
      display: 'block',
    },
  })
);

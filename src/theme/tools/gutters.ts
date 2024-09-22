import { type Theme } from '@mui/material';
import { type SystemStyleObject } from '@mui/system';

export const gutters = ({
  breakpoints,
  spacing,
}: Theme): SystemStyleObject => ({
  paddingLeft: spacing(4),
  paddingRight: spacing(4),
  [breakpoints.down('sm')]: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
});

import { type Theme } from '@mui/material';
import { type SystemStyleObject } from '@mui/system';

export const barf = ({ breakpoints, spacing }: Theme): SystemStyleObject => ({
  marginLeft: spacing(-4),
  marginRight: spacing(-4),
  width: 'auto',
  [breakpoints.down('sm')]: {
    marginLeft: spacing(-2),
    marginRight: spacing(-2),
  },
});

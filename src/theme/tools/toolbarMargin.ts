import { type Theme } from '@mui/material';
import { type SystemStyleObject } from '@mui/system';

/** Add top scroll margin to account for the sticky toolbar. */
export const toolbarMargin = ({ breakpoints }: Theme): SystemStyleObject => ({
  // NOTE Values are hardcoded to follow that of the MUI built-in `toolbar`
  //      mixin for simplicity. If the toolbar is customized, these values
  //      should be updated.
  scrollMarginTop: 56,
  [breakpoints.up('xs')]: {
    '@media (orientation: landscape)': { scrollMarginTop: 48 },
  },
  [breakpoints.up('sm')]: {
    scrollMarginTop: 64,
  },
});

import type { HeadingComponent } from 'react-markdown/lib/ast-to-react';
import Typography from '@mui/material/Typography';
import { TypographyVariant } from '@mui/material/styles';

/**
 * Available heading levels.
 * The array is shifted by 2 levels on purpose:
 * 1. Level 0 does not exist
 * 2. Level 1 is reserved for the page title so erroneous level 1 headings
 *    should be brought down to level 2
 */
const variants: TypographyVariant[] = [
  'h2',
  'h2',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export const RemarkHeading: HeadingComponent = ({ children, id, level }) => (
  // NOTE The `id` property comes from `remark-slug`
  <Typography
    gutterBottom
    id={id}
    sx={({ mixins }) => mixins.toolbarMargin}
    variant={variants[level]}
  >
    {children}
  </Typography>
);

import React from 'react';
import type { HeadingComponent } from 'react-markdown/lib/ast-to-react';
import Typography from '@material-ui/core/Typography';
import type { Variant } from '@material-ui/core/styles/createTypography';

/**
 * Available heading levels.
 * The array is shifted by 2 levels on purpose:
 * 1. Level 0 does not exist
 * 2. Level 1 is reserved for the page title so erroneous level 1 headings
 *    should be brought down to level 2
 */
const variants: Variant[] = ['h2', 'h2', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const Heading: HeadingComponent = ({ children, level }) => (
  <Typography variant={variants[level]}>{children}</Typography>
);

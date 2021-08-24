import React from 'react';
import type { HeadingComponent } from 'react-markdown/lib/ast-to-react';
import Typography from '@material-ui/core/Typography';
import type { Variant } from '@material-ui/core/styles/createTypography';

const variants: Variant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const Heading: HeadingComponent = ({ children, level }) => (
  <Typography variant={variants[level]}>{children}</Typography>
);

import type { Components } from 'react-markdown';

import { Typography } from '@mui/material';

export const Heading: Components[`h${1 | 2 | 3 | 4 | 5 | 6}`] = ({
  children,
  // NOTE The `id` property comes from the `rehype-slug` plugin
  id,
  node,
}) => {
  if (
    // NOTE Perhaps someday we'll have a functional `.includes`
    node?.tagName !== 'h1' &&
    node?.tagName !== 'h2' &&
    node?.tagName !== 'h3' &&
    node?.tagName !== 'h4' &&
    node?.tagName !== 'h5' &&
    node?.tagName !== 'h6'
  ) {
    throw new Error('Could not guess heading level');
  }
  return (
    <Typography id={id} sx={{ pt: { xs: 2, sm: 3 } }} variant={node.tagName}>
      {children}
    </Typography>
  );
};

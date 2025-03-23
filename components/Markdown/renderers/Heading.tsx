import { Typography } from '@mui/material';
import { type ReactElement } from 'react';
import { type ExtraProps } from 'react-markdown';

export const Heading = <TLevel extends `h${1 | 2 | 3 | 4 | 5 | 6}` = never>({
  children,
  id,
  node,
}: JSX.IntrinsicElements[TLevel] & ExtraProps): ReactElement => {
  if (!node?.tagName) {
    console.error('Could not guess heading level', node);
  }
  return (
    <Typography
      // NOTE The `id` property comes from the `remark-slug` plugin
      id={id}
      sx={{ pt: 2 }}
      variant={node?.tagName as TLevel}
    >
      {children}
    </Typography>
  );
};

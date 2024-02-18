import { Typography } from '@mui/material';
import { Components } from 'react-markdown';

export const RemarkHeading: Components[`h${2 | 3 | 4 | 5 | 6}`] = ({
  children,
  id,
  node,
}) =>
  node ? (
    // NOTE The `id` property comes from the `remark-slug` plugin
    <Typography
      gutterBottom
      id={id}
      sx={({ mixins }) => mixins.toolbarMargin}
      variant={node.tagName}
    >
      {children}
    </Typography>
  ) : null;

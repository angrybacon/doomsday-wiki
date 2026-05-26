'use client';

import { Box } from '@mui/material';
import { useState, type ReactNode } from 'react';
import { type ExtraProps } from 'react-markdown';

type Props = {
  children: ReactNode;
  node: ExtraProps['node'];
};

export const Spoiler = ({ children, node }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  if (!node?.position || !children) {
    console.error('Could not parse spoiler node', node);
    return children;
  }

  return (
    <Box
      aria-expanded={!isHidden}
      component="button"
      onClick={() => setIsHidden(false)}
      sx={[
        {
          bgcolor: 'action.selected',
          border: 0,
          borderRadius: 4,
          color: 'inherit',
          fontSize: 'inherit',
          textAlign: 'inherit',
          p: 2,
        },
        node.position.start.line === node.position.end.line && {
          borderRadius: 1,
          px: '.2em',
          py: '.1em',
        },
        isHidden && {
          color: 'transparent',
          cursor: 'pointer',
          '[data-dark] &': { bgcolor: 'grey.900' },
          '[data-light] &': { bgcolor: 'grey.400' },
        },
      ]}
      title="Click to reveal"
    >
      {children}
    </Box>
  );
};

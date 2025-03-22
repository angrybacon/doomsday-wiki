'use client';

import { Box } from '@mui/material';
import {
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';
import { type ExtraProps } from 'react-markdown';

type Props = PropsWithChildren & ExtraProps;

export const Spoiler: FunctionComponent<Props> = ({ children, node }) => {
  const [isHidden, setIsHidden] = useState(true);

  if (!node?.position || !children) {
    console.error('Could not parse spoiler node', node);
    return <>{children}</>;
  }

  const component =
    node.position.start.line === node.position.end.line ? 'span' : 'div';

  return (
    <Box
      component={component}
      onClick={() => setIsHidden(false)}
      role="button"
      sx={[
        {
          bgcolor: 'action.selected',
          borderRadius: 1,
          color: 'unset',
          px: '.2em',
          py: '.1em',
        },
        isHidden &&
          ((theme) => ({
            bgcolor: 'grey.400',
            color: 'transparent',
            cursor: 'pointer',
            ...theme.applyStyles('dark', { bgcolor: 'grey.900' }),
          })),
      ]}
      title="Click to reveal"
    >
      {children}
    </Box>
  );
};

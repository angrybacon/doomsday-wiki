'use client';

import { Box } from '@mui/material';
import { type Components } from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import { nord as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Code: Components['code'] = ({
  children,
  className = '',
  node,
}) => {
  if (!children) throw new Error('Missing content');

  if (!node?.position) throw new Error('Could not parse code node');

  if (node.position.start.line === node.position.end.line) {
    return (
      <Box
        component="code"
        sx={{
          bgcolor: 'action.hover',
          borderRadius: 1,
          color: 'secondary.dark',
          fontDisplay: 'swap',
          fontFamily: 'monospace',
          px: '.2em',
          py: '.1em',
        }}
      >
        {children}
      </Box>
    );
  }

  // NOTE Languages are passed down through the class name with `react-markdown`
  const [, language = 'text'] = className.split('-');

  return (
    <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
      <Box
        component={Prism}
        customStyle={{
          borderRadius: undefined,
          margin: undefined,
          padding: undefined,
        }}
        language={language || 'text'}
        style={style}
        sx={{
          borderRadius: 'inherit',
          display: 'block',
          fontSize: 'body2.fontSize',
          overscrollBehaviorInline: 'contain',
          p: 2,
        }}
      >
        {typeof children === 'string' ? children.trim() : children}
      </Box>
    </Box>
  );
};

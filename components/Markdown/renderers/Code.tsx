'use client';

import { Box } from '@mui/material';
import { type PropsWithChildren } from 'react';
import { type Components } from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import { nord as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({
  children,
  language,
}: PropsWithChildren<{ language: string }>) => (
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
      borderRadius: 4,
      display: 'block',
      fontSize: 'body2.fontSize',
      overscrollBehaviorInline: 'contain',
      p: 2,
    }}
  >
    {typeof children === 'string' ? children.trim() : children}
  </Box>
);

const CodeInline = ({ children }: PropsWithChildren) => (
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

export const Code: Components['code'] = ({
  children,
  className = '',
  node,
}) => {
  if (!node?.position || !children) {
    console.error('Could not parse code node', node);
    return <>{children}</>;
  }
  if (node.position.start.line === node.position.end.line) {
    return <CodeInline>{children}</CodeInline>;
  }
  // NOTE Languages are passed down through the class name with `react-markdown`
  const [, language] = className.split('-');
  return <CodeBlock language={language || 'text'}>{children}</CodeBlock>;
};

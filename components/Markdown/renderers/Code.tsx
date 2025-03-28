'use client';

import { Box, useTheme, type PaletteMode } from '@mui/material';
import { type FunctionComponent, type PropsWithChildren } from 'react';
import { type Components } from 'react-markdown';
import { Prism, type SyntaxHighlighterProps } from 'react-syntax-highlighter';
import {
  oneDark as dark,
  oneLight as light,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const THEMES: Record<PaletteMode, SyntaxHighlighterProps['style']> = {
  dark,
  light,
};

const CodeBlock: FunctionComponent<PropsWithChildren<{ language: string }>> = ({
  children,
  language,
}) => {
  const theme = useTheme();
  return (
    <Box
      component={Prism}
      customStyle={{
        borderRadius: undefined,
        margin: undefined,
        padding: undefined,
      }}
      language={language || 'text'}
      style={THEMES[theme.palette.mode]}
      sx={{
        borderRadius: 4,
        display: 'block',
        fontSize: 'body2.fontSize',
        p: 2,
      }}
    >
      {typeof children === 'string' ? children.trim() : children}
    </Box>
  );
};

const CodeInline: FunctionComponent<PropsWithChildren> = ({ children }) => (
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

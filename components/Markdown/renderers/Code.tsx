import { alpha, Box, useTheme, type PaletteMode } from '@mui/material';
import {
  type Component,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';
import { type Components } from 'react-markdown';
import { Prism, type SyntaxHighlighterProps } from 'react-syntax-highlighter';
import {
  oneDark as dark,
  oneLight as light,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
      // NOTE They don't support React 18 yet
      component={Prism as typeof Component<SyntaxHighlighterProps>}
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
    sx={({ palette }) => ({
      bgcolor: alpha(palette.primary.main, 0.1),
      borderRadius: 1,
      color: 'text.secondary',
      fontDisplay: 'swap',
      fontFamily: 'monospace',
      fontSize: '.9em',
      px: '.2em',
      py: '.1em',
    })}
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

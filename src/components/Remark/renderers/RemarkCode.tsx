import { Box, type PaletteMode } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { FunctionComponent, PropsWithChildren, type Component } from 'react';
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
        paddingLeft: undefined,
        paddingRight: undefined,
      }}
      language={language || 'text'}
      style={THEMES[theme.palette.mode]}
      sx={[
        ({ mixins, palette }) => ({
          ...mixins.barf,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderColor: palette.divider,
          borderTopStyle: 'solid',
          borderTopWidth: 1,
          display: 'block',
          fontSize: 'body2.fontSize',
          my: 0,
        }),
        // NOTE Let MUI handle the merging of the viewport queries from `barf`
        //      and `gutters`.
        ({ mixins }) => mixins.gutters,
      ]}
    >
      {typeof children === 'string' ? children.trim() : children}
    </Box>
  );
};

const CodeInline: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Box
    component="code"
    sx={({ palette }) => ({
      bgcolor: alpha(palette.primary.light, 0.1),
      borderColor: alpha(palette.primary.light, 0.2),
      borderRadius: '4px',
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'text.secondary',
      fontDisplay: 'swap',
      fontFamily: 'monospace',
      fontSize: 'body2.fontSize',
      px: 0.5,
      py: 0,
    })}
  >
    {children}
  </Box>
);

export const RemarkCode: Components['code'] = ({
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

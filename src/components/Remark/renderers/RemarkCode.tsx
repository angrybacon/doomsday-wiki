import { Box, type PaletteMode } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { type Component } from 'react';
import { type Components } from 'react-markdown';
import { Prism, type SyntaxHighlighterProps } from 'react-syntax-highlighter';
import {
  oneDark as dark,
  oneLight as light,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

// NOTE They don't support React 18 yet
const SyntaxHighlighter = Prism as typeof Component<SyntaxHighlighterProps>;

const THEMES: Record<PaletteMode, SyntaxHighlighterProps['style']> = {
  dark,
  light,
};

export const RemarkCode: Components['code'] = ({
  children,
  className = '',
  node,
}) => {
  const theme = useTheme();

  if (!node?.position || !children) return <>{children}</>;

  if (node.position.start.line === node.position.end.line) {
    return (
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
  }

  // NOTE Languages are passed down through the class name with `react-markdown`
  const [, language] = className.split('-');

  return (
    <Box
      component={SyntaxHighlighter}
      customStyle={{
        borderRadius: undefined,
        margin: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
      }}
      language={language || 'text'}
      style={THEMES[theme.palette.mode]}
      sx={({ mixins, palette }) => ({
        ...mixins.barf,
        ...mixins.gutters,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: palette.divider,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        display: 'block',
        fontSize: '0.8em',
      })}
    >
      {typeof children === 'string' ? children.trim() : children}
    </Box>
  );
};

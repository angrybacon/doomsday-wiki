import { Box, Divider } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { type Components } from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneDark,
  atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const RemarkCode: Components['code'] = ({
  children,
  className = '',
  inline,
}) => {
  const theme = useTheme();

  if (inline) {
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

  // NOTE ReactMarkdown passes language through the class name
  const [, language] = className.split('-');

  return (
    <Box
      component="span"
      sx={({ mixins }) => ({ ...mixins.barf, display: 'block' })}
    >
      <Divider />
      <Box
        component={SyntaxHighlighter}
        language={language}
        showLineNumbers
        style={theme.palette.mode === 'dark' ? atomOneDark : atomOneLight}
        // TODO Overwrite the padding from inline styles
        sx={{ fontSize: '0.8em', m: 0 }}
      >
        {children.map((it) => String(it).trim())}
      </Box>
      <Divider />
    </Box>
  );
};

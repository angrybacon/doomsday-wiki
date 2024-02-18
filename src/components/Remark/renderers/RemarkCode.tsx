import { Box } from '@mui/material';
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
  node,
}) => {
  const theme = useTheme();

  if (!node?.position || typeof children !== 'string') return <>{children}</>;

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

  // NOTE ReactMarkdown passes language through the class name
  const [, language] = className.split('-');

  return (
    <Box
      component="div"
      sx={[
        ({ mixins }) => ({
          ...mixins.barf,
          borderBottom: 1,
          borderTop: 1,
          display: 'block',
          fontSize: '0.8em',
        }),
        ({ palette }) => ({ borderColor: palette.divider }),
      ]}
    >
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={theme.palette.mode === 'dark' ? atomOneDark : atomOneLight}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </Box>
  );
};

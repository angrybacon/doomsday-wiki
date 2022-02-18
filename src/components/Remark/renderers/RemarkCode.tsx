import React from 'react';
import type { Components } from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneDark,
  atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { useStyles } from './RemarkCode.styles';

export const RemarkCode: Components['code'] = ({
  children,
  className = '',
  inline,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  if (inline) {
    return <code className={classes.inline}>{children}</code>;
  }
  // NOTE ReactMarkdown passes language through the class name
  const [, language] = className.split('-');
  const style = theme.palette.mode === 'light' ? atomOneLight : atomOneDark;
  return (
    <span className={classes.root}>
      <Divider />
      <SyntaxHighlighter
        className={classes.block}
        language={language}
        showLineNumbers
        style={style}
      >
        {children.map((it) => String(it).trim())}
      </SyntaxHighlighter>
      <Divider />
    </span>
  );
};

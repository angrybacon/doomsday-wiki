import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { useStyles } from './RemarkYoutube.styles';

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: { id?: string };
  };
}

export const RemarkYoutube: FunctionComponent<Props> = ({ node }) => {
  const classes = useStyles();
  const { id } = node.properties;
  if (!id) return null;
  const allow = [
    'accelerometer',
    'autoplay',
    'clipboard-write',
    'encrypted-media',
    'gyroscope',
    'picture-in-picture',
  ];
  return (
    <div className={classes.root}>
      <iframe
        allow={allow.join(';')}
        allowFullScreen
        className={classes.frame}
        src={`https://www.youtube.com/embed/${id}`}
        title={id}
      />
    </div>
  );
};

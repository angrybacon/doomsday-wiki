import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { useStyles } from './RemarkSoundcloud.styles';

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: { url?: string };
  };
}

export const RemarkSoundcloud: FunctionComponent<Props> = ({ node }) => {
  const classes = useStyles();
  const { url } = node.properties;
  if (!url) return null;
  const parameters = ['auto_play=false', 'show_comments=true', `url=${url}`];
  // TODO Explore more customization options here
  //      https://developers.soundcloud.com/docs/api/html5-widget
  return (
    <iframe
      allow="autoplay"
      className={classes.root}
      scrolling="no"
      src={`https://w.soundcloud.com/player/?${parameters.join('&')}`}
      title={url}
    />
  );
};

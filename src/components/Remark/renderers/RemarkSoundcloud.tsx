import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: { url?: string };
  };
}

export const RemarkSoundcloud: FunctionComponent<Props> = ({ node }) => {
  const { url } = node.properties;
  if (!url) return null;
  // TODO Explore more customization options here
  //      https://developers.soundcloud.com/docs/api/html5-widget
  const parameters = ['auto_play=false', 'show_comments=true', `url=${url}`];
  return (
    <Box
      allow="autoplay"
      component="iframe"
      scrolling="no"
      src={`https://w.soundcloud.com/player/?${parameters.join('&')}`}
      sx={{ border: 0, borderRadius: 1, display: 'block', width: 1 }}
      title={url}
    />
  );
};

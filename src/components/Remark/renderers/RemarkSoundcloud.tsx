import { Box } from '@mui/material';
import { type FunctionComponent } from 'react';
import { type ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';

interface Props extends ReactMarkdownProps {
  url?: string;
}

export const RemarkSoundcloud: FunctionComponent<Props> = ({ url }) => {
  if (!url) return null;
  // TODO Explore more customization options here
  //      https://developers.soundcloud.com/docs/api/html5-widget
  const parameters = [
    'auto_play=false',
    'show_comments=true',
    `url=https://soundcloud.com/${url}`,
  ];
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

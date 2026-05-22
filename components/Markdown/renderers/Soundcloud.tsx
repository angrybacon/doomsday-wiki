import { RemarkError } from '@korumite/kiwi';
import { Box } from '@mui/material';
import { type ExtraProps } from 'react-markdown';

type Props = ExtraProps & {
  path?: string;
  url?: string;
};

export const Soundcloud = ({ node, path, url }: Props) => {
  if (!url) throw new RemarkError('Missing SoundCloud URL', { node, path });
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
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 4,
        display: 'block',
        overflow: 'hidden',
        p: 1.5,
        width: 1,
      }}
      title={url}
    />
  );
};

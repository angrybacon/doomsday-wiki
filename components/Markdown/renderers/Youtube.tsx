import { Box } from '@mui/material';
import { type FunctionComponent } from 'react';
import { type ExtraProps } from 'react-markdown';

/** IFrame permissions for the YouTube widget */
const IFRAME_PERMISSIONS = [
  'accelerometer',
  'autoplay',
  'clipboard-write',
  'encrypted-media',
  'gyroscope',
  'picture-in-picture',
].join(';');

type Props = ExtraProps & {
  id?: string;
};

export const Youtube: FunctionComponent<Props> = ({ id, node }) => {
  if (!id) {
    console.error('Missing ID for YouTube widget', node);
    return null;
  }

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.default',
          height: 0,
          position: 'relative',
          pb: '56.25%', // NOTE Force intrinsic height to 16/9 ratio
        }}
      >
        <Box
          allow={IFRAME_PERMISSIONS}
          allowFullScreen
          component="iframe"
          src={`https://www.youtube.com/embed/${id}`}
          sx={{
            border: 0,
            display: 'block',
            height: 1,
            inset: 0,
            position: 'absolute',
            width: 1,
          }}
          title={id}
        />
      </Box>
    </Box>
  );
};

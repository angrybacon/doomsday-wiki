import type { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Box } from '@mui/material';

interface Props extends ReactMarkdownProps {
  id?: string;
}

export const RemarkYoutube: FunctionComponent<Props> = ({ id }) => {
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
    <Box
      sx={({ mixins }) => ({
        ...mixins.barf,
        border: 1,
        borderColor: 'divider',
        borderLeft: 0,
        borderRight: 0,
      })}
    >
      <Box
        sx={{
          bgcolor: 'background.default',
          height: 0,
          position: 'relative',
          pb: '56.25%', // NOTE Force intrinsic height to always be 16/9
        }}
      >
        <Box
          allow={allow.join(';')}
          allowFullScreen
          component="iframe"
          src={`https://www.youtube.com/embed/${id}`}
          sx={{
            border: 0,
            borderRadius: 0,
            display: 'block',
            height: 1,
            left: 0,
            top: 0,
            position: 'absolute',
            width: 1,
          }}
          title={id}
        />
      </Box>
    </Box>
  );
};

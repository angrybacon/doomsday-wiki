import type { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { useState } from 'react';
import { Box } from '@mui/material';

export const RemarkSpoiler: FunctionComponent<ReactMarkdownProps> = ({
  children,
}) => {
  const [isSpoiled, setIsSpoiled] = useState(false);

  const onSpoil = () => setIsSpoiled(true);

  return (
    <Box
      component="span"
      onClick={onSpoil}
      role="button"
      sx={[
        {
          backgroundColor: 'action.selected',
          borderRadius: '4px',
          px: '2px',
          py: '.1em',
        },
        !isSpoiled &&
          (({ palette }) => ({
            ...(palette.mode === 'dark'
              ? { backgroundColor: 'grey.900', color: 'grey.900' }
              : { backgroundColor: 'grey.400', color: 'grey.400' }),
            cursor: 'pointer',
          })),
      ]}
    >
      {children}
    </Box>
  );
};

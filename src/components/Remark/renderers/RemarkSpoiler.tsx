import { Box } from '@mui/material';
import { useState, type FunctionComponent } from 'react';
import { type Options as MarkdownOptions } from 'react-markdown';

export const RemarkSpoiler: FunctionComponent<MarkdownOptions> = ({
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

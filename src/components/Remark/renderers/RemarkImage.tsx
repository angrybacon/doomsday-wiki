import { Box, Typography } from '@mui/material';
import { type Components } from 'react-markdown';

export const RemarkImage: Components['img'] = ({ title, ...rest }) => {
  if (!rest.src) return null;
  const description: string | undefined = title || rest.alt;
  return (
    <>
      <Box
        component="span"
        sx={({ mixins }) => ({
          ...mixins.barf,
          border: 1,
          borderColor: 'divider',
          borderLeft: 0,
          borderRight: 0,
          display: 'block',
          img: { display: 'block', width: 1 },
        })}
      >
        <img alt={description} decoding="async" {...rest} title={description} />
      </Box>
      {description && (
        <Typography
          color="textSecondary"
          component="em"
          sx={{ display: 'block', mt: 1, textAlign: 'center' }}
          variant="caption"
        >
          {description}
        </Typography>
      )}
    </>
  );
};

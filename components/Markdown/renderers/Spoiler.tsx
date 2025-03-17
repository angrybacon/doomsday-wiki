import { Box } from '@mui/material';
import {
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';
import { type ExtraProps } from 'react-markdown';

type Props = PropsWithChildren & ExtraProps;

export const Spoiler: FunctionComponent<Props> = ({ children, node }) => {
  const [isSpoiled, setIsSpoiled] = useState(false);

  if (!node?.position) return <>{children}</>;

  const onSpoil = () => setIsSpoiled(true);

  const component =
    node.position.start.line === node.position.end.line ? 'span' : 'div';

  return (
    <Box
      component={component}
      onClick={onSpoil}
      role="button"
      sx={[
        {
          bgcolor: 'action.selected',
          borderRadius: 1,
          px: '.2em',
          py: '.1em',
        },
        !isSpoiled &&
          (({ palette }) => ({
            ...(palette.mode === 'dark'
              ? { bgcolor: 'grey.900', color: 'grey.900' }
              : { bgcolor: 'grey.400', color: 'grey.400' }),
            cursor: 'pointer',
          })),
      ]}
    >
      {children}
    </Box>
  );
};

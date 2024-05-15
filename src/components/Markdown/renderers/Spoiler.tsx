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

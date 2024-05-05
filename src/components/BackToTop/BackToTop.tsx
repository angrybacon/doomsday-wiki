import { mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import { Fab, Fade, useScrollTrigger } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type SxProps } from '@mui/system';
import { useEffect, useState, type FunctionComponent } from 'react';

type Props = {
  sx?: SxProps<Theme>;
};

export const BackToTop: FunctionComponent<Props> = ({ sx }) => {
  const [hasBeenDisplayed, setHasBeenDisplayed] = useState<boolean>(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 500 });

  const onClick = () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (trigger) {
      setHasBeenDisplayed(true);
    }
  }, [trigger]);

  if (!hasBeenDisplayed) return null;

  return (
    <Fade in={trigger}>
      <Fab
        aria-label="Scroll back to top"
        color="primary"
        onClick={onClick}
        size="small"
        sx={[
          { bottom: 0, position: 'fixed', right: 0 },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Icon path={mdiChevronUp} size={1} />
      </Fab>
    </Fade>
  );
};

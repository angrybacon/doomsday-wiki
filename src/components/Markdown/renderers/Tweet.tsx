import { Box, CircularProgress, Typography } from '@mui/material';
import Script from 'next/script';
import { useRef, useState, type FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import { type ExtraProps } from 'react-markdown';

type CreateTweet = (
  id: string,
  anchor: Element,
  options: { align: string; dnt: boolean; theme: string },
) => Promise<Element>;

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    twttr?: { widgets?: { createTweet?: CreateTweet } };
  }
}

type Props = ExtraProps & {
  id?: string;
};

export const Tweet: FunctionComponent<Props> = ({ id, node }) => {
  const [hasError, setHasError] = useState(false);
  const [height, setHeight] = useState(700);
  const [isLoading, setIsLoading] = useState(true);
  const tweet = useRef<HTMLDivElement>(null);
  const { inView, ref: root } = useInView({
    fallbackInView: true,
    rootMargin: '500px',
    triggerOnce: true,
  });

  if (!id) {
    console.error('Missing ID for Tweet widget', node);
    return null;
  }

  const onReady = () => {
    if (tweet.current && window.twttr?.widgets?.createTweet) {
      const options = { align: 'center', dnt: true, theme: 'dark' };
      window.twttr.widgets
        .createTweet(id, tweet.current, options)
        .then(() => {
          const value = tweet.current?.clientHeight ?? 0;
          if (value) {
            setHeight((previous) => Math.max(value, previous));
          } else {
            setHasError(true);
          }
        })
        // NOTE Use `finally` in case Twitter decides to make an actual promise
        .finally(() => setIsLoading(false));
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <Box
      ref={root}
      sx={{
        alignItems: 'center',
        display: 'flex',
        height,
        justifyContent: 'center',
        minHeight: height,
        overflow: 'hidden',
        position: 'relative',
        transition: ({ transitions }) => transitions.create('height'),
      }}
    >
      {inView && (
        <>
          <Box
            ref={tweet}
            sx={{
              width: '100%',
              '& > *': { mb: '0!important', mt: '0!important' },
            }}
          />
          {hasError && (
            <Typography
              sx={{
                color: 'error.main',
                position: 'absolute',
                textAlign: 'center',
              }}
            >
              Could not retrieve tweet {id}
            </Typography>
          )}
          {isLoading && (
            <CircularProgress
              color="secondary"
              size={100}
              sx={{ position: 'absolute' }}
            />
          )}
          <Script
            onReady={onReady}
            src="https://platform.twitter.com/widgets.js"
          />
        </>
      )}
    </Box>
  );
};

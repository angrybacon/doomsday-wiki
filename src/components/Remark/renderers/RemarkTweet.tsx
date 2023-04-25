import Script from 'next/script';
import { FunctionComponent, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Box, CircularProgress, Typography } from '@mui/material';

type CreateTweet = (
  id: string,
  anchor: Element,
  options: { align: string; dnt: boolean; theme: string }
) => Promise<Element>;

declare global {
  interface Window {
    twttr?: { widgets?: { createTweet?: CreateTweet } };
  }
}

interface Props {
  node: ReactMarkdownProps['node'] & {
    properties: { id?: string };
  };
}

export const RemarkTweet: FunctionComponent<Props> = ({ node }) => {
  const { id } = node.properties;
  const [hasError, setHasError] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(400);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const tweet = useRef<HTMLDivElement>(null);
  const { inView, ref: root } = useInView({
    fallbackInView: true,
    rootMargin: '500px',
    triggerOnce: true,
  });

  if (!id) return null;

  const onReady = () => {
    if (tweet.current && window.twttr?.widgets?.createTweet) {
      const options = { align: 'center', dnt: true, theme: 'dark' };
      window.twttr.widgets
        .createTweet(id, tweet.current, options)
        .then(() => {
          const height = tweet.current?.clientHeight ?? 0;
          if (height) {
            setHeight(height);
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
              alignSelf: 'flex-start',
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

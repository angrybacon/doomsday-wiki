import { CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import postHog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import { ThemeProvider } from '@/theme/ThemeContext';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  postHog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'always',
  });
}

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="The Doomsday Wiki" name="description" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <PostHogProvider client={postHog}>
          <Component {...pageProps} />
        </PostHogProvider>
      </ThemeProvider>
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  );
}

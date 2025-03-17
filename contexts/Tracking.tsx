'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import P from 'posthog-js';
import { PostHogProvider, usePostHog } from 'posthog-js/react';
import { Suspense, useEffect, type PropsWithChildren } from 'react';

const PostHogPageView = () => {
  const client = usePostHog();
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (client && pathname) {
      let url = window.origin + pathname;
      if (search?.toString()) {
        url = url + `?${search.toString()}`;
      }
      client.capture('$pageview', { $current_url: url });
    }
  }, [client, pathname, search]);

  return null;
};

export const TrackingProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (window !== undefined && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      P.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageleave: true,
        capture_pageview: false,
        persistence: 'localStorage',
      });
    }
  }, []);

  return (
    <PostHogProvider client={P}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PostHogProvider>
  );
};

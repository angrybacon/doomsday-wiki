'use client';

import P from 'posthog-js';
import { useEffect } from 'react';

export const Tracking = () => {
  useEffect(() => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    P.register({ device_theme: theme });
  }, []);

  return null;
};

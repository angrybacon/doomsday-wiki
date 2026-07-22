import posthog from 'posthog-js';

if (
  process.env.NEXT_PUBLIC_POSTHOG_HOST &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2026-05-30',
    loaded: (P) => {
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      P.register({ device_theme: theme });
    },
    persistence: 'localStorage',
  });
}

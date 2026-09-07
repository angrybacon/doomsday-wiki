import type { NextConfig } from 'next';

export default {
  env: {
    NEXT_PUBLIC_VERSION:
      process.env.NODE_ENV === 'production'
        ? new Date()
            .toISOString()
            .slice(0, 16)
            .replaceAll('-', '.')
            .replaceAll('T', '.')
            .replaceAll(':', '')
        : 'development',
  },
  redirects: () =>
    Promise.resolve([
      {
        destination: 'https://discord.gg/vajvFXt',
        permanent: false,
        source: '/discord',
      },
    ]),
  // NOTE We increase the default timeout because rate-limited LQIP fetching and
  //      computing might exceed the default 60 seconds.
  staticPageGenerationTimeout: 60 * 3,
} satisfies NextConfig;

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
  reactStrictMode: true,
  // NOTE We increase the default timeout because we're limited with Scryfall
  //      rate limits.
  staticPageGenerationTimeout: 60 * 5,
  redirects: () =>
    Promise.resolve([
      {
        destination: 'https://discord.gg/vajvFXt',
        permanent: false,
        source: '/discord',
      },
    ]),
} satisfies NextConfig;

import type { NextConfig } from 'next';

export default {
  images: {
    remotePatterns: [{ hostname: 'cards.scryfall.io', protocol: 'https' }],
  },
  reactStrictMode: true,
  // NOTE We increase the default timeout because we're limited with Scryfall
  //      rate limits.
  staticPageGenerationTimeout: 180,
  redirects: () =>
    Promise.resolve([
      {
        destination: 'https://discord.gg/vajvFXt',
        permanent: false,
        source: '/discord',
      },
    ]),
} satisfies NextConfig;

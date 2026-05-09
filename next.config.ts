import { type NextConfig } from 'next';

export default {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [{ hostname: 'cards.scryfall.io', protocol: 'https' }],
  },
  reactStrictMode: true,
  // NOTE We increase the default timeout because we're limited with Scryfall
  //      rate limits.
  staticPageGenerationTimeout: 120,
  redirects: async () => [
    {
      destination: 'https://discord.gg/vajvFXt',
      permanent: false,
      source: '/discord',
    },
  ],
} satisfies NextConfig;

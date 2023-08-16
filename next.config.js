module.exports = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [{ hostname: 'cards.scryfall.io', protocol: 'https' }],
  },
  reactStrictMode: true,
  redirects: async () => [
    {
      destination: 'https://discord.gg/vajvFXt',
      permanent: false,
      source: '/discord',
    },
  ],
};

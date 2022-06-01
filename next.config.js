const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  eslint: { ignoreDuringBuilds: true },
  pwa: { dest: 'public', runtimeCaching },
  reactStrictMode: true,
});

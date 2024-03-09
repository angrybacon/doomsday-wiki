const nextJest = require('next/jest');

module.exports = nextJest()({
  moduleNameMapper: { '^@/(.+)$': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
});

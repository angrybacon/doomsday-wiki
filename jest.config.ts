import { type Config } from 'jest';
import NextJest from 'next/jest';

export default NextJest()({
  moduleNameMapper: { '^@/(.+)$': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
} satisfies Config);

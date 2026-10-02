import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    coverage: {
      reportOnFailure: true,
      reporter: ['json', 'json-summary', 'text'],
    },
    environment: 'happy-dom',
    globals: true,
    mockReset: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});

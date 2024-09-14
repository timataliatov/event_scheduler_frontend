import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      // ... other aliases ...
    },
  },
  esbuild: {
    loader: 'jsx',
  },
  define: {
    // ... other defines ...
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.png': 'file',
      },
    },
  },
});

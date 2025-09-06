import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/quantresearch-landin-fl5k/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

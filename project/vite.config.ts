import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ilhankarabicak-websayfasi/',
  root: '.', // workflow cd project yaptığından burada kök project/
  build: {
    outDir: 'dist', // dist project klasöründe kalacak
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

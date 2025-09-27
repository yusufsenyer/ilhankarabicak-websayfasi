// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.', // index.html ana dizinde
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // entry’i direkt veriyoruz
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }
})

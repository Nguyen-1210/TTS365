/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  // mode: "development",
  plugins: [react()],
  // build: {
  //   sourcemap: true,
  //   outDir: "dist",
  //   emptyOutDir: true,
  //   chunkSizeWarningLimit: 1000000,
  // },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: [{ find: "@app", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/_globalStyle.scss";',
      },
    },
  },
  
});

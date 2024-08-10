/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  mode: import.meta.env.VITE_NODE_ENV || "development",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTest.ts",
  },
  build: {
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000000,
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/app/assets/styles/_globalStyle.scss";',
      },
    },
  },
  resolve: {
    alias: [{ find: "@app", replacement: path.resolve(__dirname, "src") }],
  },
});

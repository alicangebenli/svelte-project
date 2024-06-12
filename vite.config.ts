import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dts from "vite-plugin-dts";
// @ts-ignore
import path from "path";
// @ts-ignore
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

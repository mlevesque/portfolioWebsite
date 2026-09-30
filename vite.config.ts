import mdx from '@mdx-js/rollup'
import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    reactRouter(),
  ],
  base: '/',
})

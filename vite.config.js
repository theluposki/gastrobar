import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    https: {
      key: "./server.key",
      cert: "./server.crt",
    },
  },
  plugins: [vue()],
})

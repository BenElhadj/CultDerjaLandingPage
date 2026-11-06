import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as compiler from 'vue/compiler-sfc'

export default defineConfig({
  plugins: [vue({ compiler })],
  base: process.env.GITHUB_ACTIONS ? '/CultDerjaLandingPage/' : '/',
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})

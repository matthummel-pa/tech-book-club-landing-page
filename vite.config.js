import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['bootstrap-icons/font/bootstrap-icons.css']
    }
  }
})


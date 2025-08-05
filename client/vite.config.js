import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

  ],

  server: {
    proxy: {
      // je api endpoint dia start hobe seta bujia diar jonno
      '/api/': {
        target: 'http://localhost:8000',
        //target: 'https://agro-project-production.up.railway.app/',
        changeOrigin: true,
        secure: false
      }
    }
  },


  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },


})

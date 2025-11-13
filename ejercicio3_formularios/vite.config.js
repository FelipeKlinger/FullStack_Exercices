import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // añadedo configuración del proxy
    proxy: {
      '/api': { // cualquier llamada que empiece por /api se redirige
        target: 'http://localhost:3001', // al servidor de node
        changeOrigin: true, // para evitar problemas de CORS
      },
    }
  },
})

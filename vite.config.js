import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ganti jika nama repository GitHub kamu bukan "tutorial-terbuka".
  base: '/tutorial-terbuka/',
})

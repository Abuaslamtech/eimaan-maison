import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind v3 runs via PostCSS (postcss.config.js) — no vite plugin needed
export default defineConfig({
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative asset paths so the build works on GitHub Pages project sites
  // (https://<user>.github.io/<repo>/) as well as at a domain root.
  base: './',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://arciagaam.github.io/portfolio-1.0/',
  plugins: [react()],
})

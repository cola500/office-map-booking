import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set to "./" so all asset paths are relative - works in any hosting context
  base: "./",
})

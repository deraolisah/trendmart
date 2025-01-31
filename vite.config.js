import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  assetsInclude: ['**/*.png', '**/*.PNG', "**/*.JPG"],
  plugins: [react()],
  server: {
    port: 7777, // Change this to your desired port
=======
  plugins: [react()],
  server: {
    port: 3001, // Change this to your desired port
>>>>>>> origin/main
  },
})

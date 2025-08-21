import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Set base to your repo name for project sites.
// If your repo is "davina-portfolio", the URL will be
// https://daylinda.github.io/davina-portfolio/
// For that, base must be "/davina-portfolio/".
// If you use a user site (repo name "daylinda.github.io"), set base to "/".

export default defineConfig({
  plugins: [react()],
  base: '/daylinda.github.io/davina-portfolio/'
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base must match your GitHub Pages project-site path exactly:
// https://<username>.github.io/<repo-name>/  ->  base: '/<repo-name>/'
// If you ever move to a user/org site (https://<username>.github.io/) or a
// custom domain, change this back to '/'.
export default defineConfig({
  plugins: [react()],
  
  base: './',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // GitHub Pagesのリポジトリ名に合わせる
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

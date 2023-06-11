import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import assets from '@originjs/vite-plugin-global-style'
import GlobalStyle from './src/assets/styles/GlobalStyle'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  assets("/src/assets/styles/GlobalStyle")],
})

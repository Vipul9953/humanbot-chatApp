import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vue from '@vitejs/plugin-vue';
import Inspector from 'vite-plugin-vue-inspector';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  vue(),
    Inspector()],
})
 


 

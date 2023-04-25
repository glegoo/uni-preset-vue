/*
 * @Author: Cheng Wei
 * @Date: 2023-04-25 15:13:00
 * @LastEditTime: 2023-04-25 15:27:23
 * @LastEditors: Cheng Wei
 * @Description: 
 * @FilePath: \uni-preset-vue\vite.config.ts
 * @GitHub: https://github.com/glegoo
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/global.scss";',
      },
    },
  },
})

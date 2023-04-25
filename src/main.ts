/*
 * @Author: Cheng Wei
 * @Date: 2023-04-25 15:13:00
 * @LastEditTime: 2023-04-25 20:48:34
 * @LastEditors: Cheng Wei
 * @Description:
 * @FilePath: \uni-preset-vue\src\main.ts
 * @GitHub: https://github.com/glegoo
 */
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  return {
    app,
  }
}

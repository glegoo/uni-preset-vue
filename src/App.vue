<!--
 * @Author: Cheng Wei
 * @Date: 2023-04-25 15:13:00
 * @LastEditTime: 2023-04-25 15:22:29
 * @LastEditors: Cheng Wei
 * @Description: 
 * @FilePath: \uni-preset-vue\src\App.vue
 * @GitHub: https://github.com/glegoo
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style>
</style>

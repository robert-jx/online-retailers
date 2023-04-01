import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入自定义样式变量
import '@/assets/css/common.scss'

const app: any = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css';
import 'animate.css';
import 'vue3-carousel/dist/carousel.css'

const pinia = createPinia()
createApp(App)

.use(router)
.use(pinia)
.mount('#app')

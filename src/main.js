import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import VueDragDrop from 'vue-drag-drop';
import VueApexCharts from "vue3-apexcharts";
import Notifications from '@kyvg/vue3-notification'
import velocity from 'velocity-animate'
import 'flowbite';

import 'ant-design-vue/dist/antd.css';
import 'animate.css';
import 'flowbite';
import 'vue3-carousel/dist/carousel.css'

const pinia = createPinia()
createApp(App)

.use(router)
.use(pinia)
.use(VueDragDrop)
.use(VueApexCharts)
.use(Notifications, { velocity })
.mount('#app')

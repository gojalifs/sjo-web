import { createApp } from 'vue'
import Root from './Root.vue'
import router from './router'
import './styles.css'

createApp(Root).use(router).mount('#app')

import { createApp, reactive } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'


import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')

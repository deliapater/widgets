import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(store).mount('#app')

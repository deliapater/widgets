import { createApp } from 'vue'
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css"; 
import './style.css'
import App from './App.vue'
import store from './store'

const vuetify = createVuetify(); 

createApp(App)
  .use(store)    
  .use(vuetify)  
  .mount('#app'); 
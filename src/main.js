import { createApp } from 'vue'
import App from './App.vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/router';

createApp(App).use(ElementPlus).use(router).mount('#app')

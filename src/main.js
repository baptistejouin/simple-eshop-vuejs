import { createApp } from 'vue'
import App from '@/App.vue';
import router from '@/router';
import '@/index.css';
import '@/assets/styles/_global.sass';

createApp(App).use(router).mount('#app');

import { createApp } from 'vue'
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// Tailwind CSS
import '@/index.css';
// Override Styling with SASS
import '@/assets/styles/styles.sass';

createApp(App).use(router).use(store).mount('#app');

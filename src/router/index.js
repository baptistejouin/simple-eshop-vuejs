import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Account from '@/views/Account.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/account', name: 'Account', component: Account }
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;

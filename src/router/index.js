import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Account from '@/views/Account.vue'
import Product from '@/views/Product.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/account', name: 'Account', component: Account },
	{ path: '/product/:id', name: 'Product', component: Product }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

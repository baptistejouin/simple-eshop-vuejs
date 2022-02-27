<template>
	<nav class="flex px-[84px] py-[32px] items-center border-b">
		<h1 class="text-5xl font-bold"><router-link :to="{ name: 'Home' }">A.P.C</router-link></h1>
		<ul class="flex ml-auto space-x-3">
			<li>
				<router-link :to="{ path: '#' }">
					<span class="icon-search border rounded-full p-3 text-[24px] hover:bg-gray-50 cursor-pointer" @click="toggleSearch"></span>
				</router-link>
			</li>
			<li class="relative">
				<span class="icon-cart border rounded-full p-3 text-[24px] hover:bg-gray-50 cursor-pointer" @click="toggleCart"></span>
				<span class="translate-x-1/2 -translate-y-1/2 absolute text-xs -top-1 right-0 rounded-full px-2 py-1 bg-gray-200">{{ getCartTotal.product }}</span>
			</li>
			<li>
				<router-link :to="{ path: '/account' }">
					<span class="icon-account border rounded-full p-3 text-[24px] hover:bg-gray-50 cursor-pointer"></span>
				</router-link>
			</li>
		</ul>
	</nav>
	<CartSidebar :active="cartIsActive" @toggleCart="toggleCart" />
</template>

<script>
import { mapGetters } from 'vuex';

import CartSidebar from '@/components/Sidebar/CartSidebar.vue';

export default {
	components: {
		CartSidebar
	},
	name: 'Navbar',
	data() {
		return {
			cartIsActive: false
		};
	},
	methods: {
		toggleCart() {
			this.cartIsActive = !this.cartIsActive;
		},
		toggleSearch() {
			alert('handleSearch');
		}
	},
	computed: {
		...mapGetters(['getCartTotal'])
	}
};
</script>

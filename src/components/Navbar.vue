<template>
	<div class="border-b">
		<nav class="container mx-auto flex px-8 py-8 items-center">
			<h1 class="text-5xl font-bold"><router-link :to="{ name: 'Home' }" aria-label="go to homepage">A.P.C</router-link></h1>
			<ul class="flex grow justify-end gap-3">
				<li>
					<router-link :to="{ path: '#' }" aria-label="search a product by name" @click="toggleSearch">
						<span class="icon-search border rounded-full p-3 text-2xl hover:bg-gray-50 cursor-pointer"></span>
					</router-link>
				</li>
				<li class="relative">
					<button aria-label="search a product by name" @click="toggleCart">
						<span class="icon-cart border rounded-full p-3 text-2xl hover:bg-gray-50"></span>
						<span class="translate-x-1/2 -translate-y-1/2 absolute text-xs -top-1 right-0 rounded-full px-2 py-1 bg-gray-200" aria-label="number of products in cart">{{ getCartTotal.product }}</span>
					</button>
				</li>
				<li>
					<router-link :to="{ path: '/account' }" aria-label="go to account page">
						<span class="icon-account border rounded-full p-3 text-2xl hover:bg-gray-50 cursor-pointer"></span>
					</router-link>
				</li>
			</ul>
		</nav>
		<CartSidebar :active="cartIsActive" @toggleCart="toggleCart" />
	</div>
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
			if (this.cartIsActive) {
				setTimeout(() => {
					document.querySelector('#closeCartPanel').focus();
				}, 100);
			}
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

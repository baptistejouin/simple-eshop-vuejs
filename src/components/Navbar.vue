<template>
	<nav class="flex px-[84px] py-[32px] items-center border-b">
		<h1 class="text-5xl font-bold"><router-link :to="{ name: 'Home' }">A.P.C</router-link></h1>
		<ul class="flex ml-auto space-x-3">
			<li v-for="item in navItems" :key="item.name">
				<span v-if="item.methods" @click="item.methods" :aria-label="item.label" :class="`icon-${item.icon}`" class="border rounded-full p-3 text-[24px] hover:bg-gray-50 cursor-pointer"></span>
				<router-link v-else :to="{ path: item.path }">
					<span :class="`icon-${item.icon}`" class="border rounded-full p-3 text-[24px] hover:bg-gray-50"></span>
				</router-link>
			</li>
		</ul>
	</nav>
	<CartSidebar :active="shopCartIsActive" @toggleShopCart="toggleShopCart" />
</template>

<script>
import CartSidebar from '@/components/Sidebar/CartSidebar.vue';

export default {
	components: {
		CartSidebar
	},
	name: 'Navbar',
	data() {
		return {
			shopCartIsActive: false,
			navItems: [
				{
					path: '#',
					icon: 'search',
					methods: this.toggleSearch,
					label: 'Search bar'
				},
				{
					path: '#',
					icon: 'cart',
					methods: this.toggleShopCart,
					label: 'Your cart'
				},
				{
					path: '/account',
					icon: 'account'
				}
			]
		};
	},
	methods: {
		toggleShopCart() {
			this.shopCartIsActive = !this.shopCartIsActive;
		},
		toggleSearch() {
			alert('handleSearch');
		}
	}
};
</script>

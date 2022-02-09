<template>
	<header class="w-full">
		<Navbar :navItems="navItems"></Navbar>
	</header>
	<router-view></router-view>
</template>

<style lang="sass">
@import '@/assets/styles/global'
</style>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
	name: 'Home',
	components: {
		Navbar
	},
	methods: {
		openCart() {
			alert('openCart');
		},
		handleSearch() {
			alert('handleSearch');
		}
	},
	data() {
		return {
			navItems: [
				{
					path: '#',
					icon: 'search',
					methods: this.handleSearch,
					label: 'Search bar'
				},
				{
					path: '#',
					icon: 'cart',
					methods: this.openCart,
					label: 'Your cart',
				},
				{
					path: '/account',
					icon: 'account'
				}
			]
		};
	}
};
</script>

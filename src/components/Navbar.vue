<template>
	<nav class="flex px-[84px] py-[32px] items-center border-b">
		<router-link :to="{ name: 'Home' }"><h1 class="text-5xl font-bold">A.P.C</h1></router-link>
		<ul class="flex ml-auto space-x-3">
			<li v-for="item in navItems" :key="item.name">
				<div v-if="item.methods" @click="item.methods" :aria-label="item.label">
					<span :class="`icon-${item.icon}`" class="border rounded-full p-3 text-[24px] hover:bg-gray-50 cursor-pointer"></span>
				</div>
				<router-link v-else :to="{ path: item.path }">
					<span :class="`icon-${item.icon}`" class="border rounded-full p-3 text-[24px] hover:bg-gray-50"></span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
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
		openCart() {
			alert('openCart');
		},
		handleSearch() {
			alert('handleSearch');
		}
	}
};
</script>

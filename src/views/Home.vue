<template>
	<main class="px-[84px] pt-[32px]">
		<h2 class="text-xl font-bold">Recommandé pour vous</h2>
		<p class="font-medium text-gray-400">Basé sur vos recherches récentes et vos articles aimée.</p>
		<ul class="flex space-x-3 mt-8 mb-4">
			<Filter v-for="(item, i) in filterItems" :key="i" :filter="item" />
		</ul>
		<ul class="flex space-x-5">
			<ProductCard v-for="item in getProducts" :key="item.id" :product="item"/>
		</ul>
	</main>
</template>

<script>
import Filter from '@/components/Home/Filter.vue';
import ProductCard from '@/components/Home/ProductCard.vue';

import { mapGetters } from 'vuex';

export default {
	name: 'Home',
	components: {
		Filter,
		ProductCard
	},
	data() {
		return {
			filterItems: [
				{
					label: 'Afficher tout',
					active: true
				},
				{
					label: 'Vestes',
					active: false
				},
				{
					label: 'Pantalons',
					active: false
				},
				{
					label: 'Chemises',
					active: false
				},
				{
					label: 'Sacs',
					active: false
				}
			]
		};
	},
	computed: {
		...mapGetters(['getProducts'])
	}
};
</script>

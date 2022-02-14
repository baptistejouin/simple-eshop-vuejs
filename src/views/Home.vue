<template>
	<main class="px-[84px] pt-[32px]">
		<h2 class="text-xl font-bold">Recommandé pour vous</h2>
		<p class="font-medium text-gray-400">Basé sur vos recherches récentes et vos articles aimée.</p>
		<ul class="flex space-x-3 mt-8 mb-4">
			<Filter v-for="item in filterItems" :key="item.label" :filter="item"/>
		</ul>
		<ul class="flex space-x-5">
			<ProductCard v-for="item in ProductCardItems" :key="item.id" :product="item" :handleLike="handleLike"/>
		</ul>
	</main>
</template>

<script>
import Filter from '@/components/Home/Filter.vue';
import ProductCard from '@/components/Home/ProductCard.vue';

import img00 from '@/assets/img/product/00-0.webp';
import img01 from '@/assets/img/product/01-0.webp';

export default {
	name: 'Home',
	components: {
		Filter,
		ProductCard,
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
			],
			// TODO : Retrieve data from a JSON file
			ProductCardItems: [
				{
					id: 1,
					name: 'Winter Coat',
					price: 300,
					img: img00,
					liked: true,
				},
				{
					id: 2,
					name: 'Classic Shirt',
					price: 300,
					img: img01,
					liked: false,
				}
			]
		}
	},
	methods: {
		handleLike(id) {
			// TODO : Manage states using Vuex.
			const product = this.ProductCardItems.find(p => id === p.id)
			product.liked = !product.liked
		}
	}
}
</script>

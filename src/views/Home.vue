<template>
	<main class="px-[84px] pt-[32px]">
		<h2 class="text-xl font-bold">Recommandé pour vous</h2>
		<p class="font-medium text-gray-400">Basé sur vos recherches récentes et vos articles aimée.</p>
		<ul class="flex space-x-3 mt-8 mb-4">
			<Filter v-for="ProductCardItems in filterItems" :key="ProductCardItems.label" :active="ProductCardItems.active">{{ ProductCardItems.label }}</Filter>
		</ul>
		<ul class="flex space-x-5">
			<ProductCard v-for="item in ProductCardItems" :key="item.id" :name="item.name" :price="item.price" :img="item.img" :liked="item.liked" :handleLike="handleLike" :id="item.id"></ProductCard>
		</ul>
	</main>
</template>

<script>
import Filter from '@/components/Home/Filter.vue';
import ProductCard from '@/components/Home/ProductCard.vue';

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
					img: '/img/winter-coat.jpg',
					liked: true,
				},
				{
					id: 2,
					name: 'Winter Coat',
					price: 300,
					img: '/img/winter-coat.jpg',
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

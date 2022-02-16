<template>
	<main class="px-[84px] pt-[32px]">
		<h2 class="text-xl font-bold">Recommandé pour vous</h2>
		<p class="font-medium text-gray-400">Basé sur vos recherches récentes et vos articles aimée.</p>
		<ul class="flex space-x-3 mt-8 mb-4">
			<Filter v-for="item in getCategories" :key="item.id" :categorie="item" />
		</ul>
		<ul class="flex space-x-5">
			<li v-if="getProducts(getCurrentCategorie).length === 0" class="text-gray-300 text-">Aucun articles à afficher.</li>
			<ProductCard v-else v-for="item in getProducts(getCurrentCategorie)" :key="item.id" :product="item" />
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
	computed: {
		...mapGetters(['getProducts', 'getCategories', 'getCurrentCategorie'])
	},
	mounted() {
		this.$store.dispatch('updateLikedFromLocalStorage');
	}
};
</script>

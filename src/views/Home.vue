<template>
	<main class="container mx-auto mt-8 px-8">
		<h2 class="text-xl font-bold">Recommandé pour vous</h2>
		<p class="font-medium text-gray-400">Basé sur vos recherches récentes et vos articles aimée.</p>
		<ul class="flex gap-3 mt-8 mb-4 flex-wrap">
			<Filter v-for="item in getCategories" :key="item.id" :categorie="item" />
		</ul>
		<div v-if="getProducts(getCurrentCategorie).length === 0" class="text-gray-300">Aucun articles à afficher.</div>
		<ul v-else>
			<swiper
				:breakpoints="{
					'640': {
						slidesPerView: 1,
						spaceBetween: 16
					},
					'768': {
						slidesPerView: 2,
						spaceBetween: 24
					},
					'1024': {
						slidesPerView: 4,
						spaceBetween: 32
					}
				}"
			>
				<swiper-slide v-for="item in getProducts(getCurrentCategorie)" :key="item.id"><ProductCard :product="item" /></swiper-slide>
			</swiper>
		</ul>
	</main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';

import { mapGetters } from 'vuex';

import Filter from '@/components/Home/Filter.vue';
import ProductCard from '@/components/Home/ProductCard.vue';

export default {
	name: 'Home',
	components: {
		Filter,
		ProductCard,
		Swiper,
		SwiperSlide
	},
	computed: {
		...mapGetters(['getProducts', 'getCategories', 'getCurrentCategorie'])
	},
	mounted() {
		this.$store.dispatch('updateLikedFromLocalStorage');
	}
};
</script>

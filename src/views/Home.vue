<template>
	<main class="mx-[84px] mt-[32px]">
		<h2 class="text-xl font-bold">Recommandé pour vous</h2>
		<p class="font-medium text-gray-400">Basé sur vos recherches récentes et vos articles aimée.</p>
		<ul class="flex space-x-3 mt-8 mb-4">
			<Filter v-for="item in getCategories" :key="item.id" :categorie="item" />
		</ul>
		<div v-if="getProducts(getCurrentCategorie).length === 0" class="text-gray-300">Aucun articles à afficher.</div>
		<ul v-else class="mx-[-84px]">
			<swiper :slidesOffsetBefore="84" :slidesOffsetAfter="84" :slidesPerView="4" :space-between="32">
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

<template>
	<div class="container mx-auto mt-8">
		<div class="flex justify-between gap-16">
			<div class="w-3/6 flex gap-4">
				<div class="w-1/5 flex flex-col gap-4">
					<img v-for="productImg in product.img" class="w-full border rounded-xl p-3" :src="productImg" alt="" />
				</div>
				<div class="w-4/5">
					<img class="border rounded-xl p-3" :src="product.img[0]" alt="" />
				</div>
			</div>
			<div class="w-3/6 flex flex-col">
				<div class="flex justify-between">
					<div class="flex flex-col">
						<h2 class="text-xl font-semibold">{{ product.name }}</h2>
						<p class="text-sm">100% Coton organique</p>
					</div>
					<span :class="`icon-${isLiked ? 'liked' : 'like'}`" class="text-4xl text-gray-500 cursor-pointer" @click.prevent="setLike(product.id)"></span>
				</div>
				<h3 class="text-lg font-semibold mt-4">{{ product.price.toFixed(2) }} €</h3>
				<div class="flex flex-col gap-4 mt-12">
					<button class="bg-black text-white py-3 rounded-2xl font-semibold" @click="addToCart(product)">Ajouter au panier</button>
					<button class="bg-neutral-200 text-black py-3 rounded-2xl font-semibold">Réserver en magasin</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

import { useRoute } from 'vue-router';

export default {
	name: 'Product',
	setup() {
		const route = useRoute();
		const id = parseInt(route.params.id);
		return {
			id
		};
	},
	computed: {
		...mapGetters(['getProduct']),
		product() {
			const product = this.getProduct(this.id);
			if (!product) this.$router.push('/');
			return product;
		},
		...mapState(['liked']),
		isLiked() {
			return this.liked.find((p) => p === this.product.id);
		}
	},
	methods: {
		...mapActions(['setLike', 'addToCart'])
	}
};
</script>

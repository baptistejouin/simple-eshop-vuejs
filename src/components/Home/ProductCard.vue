<template>
	<li>
		<router-link :to="{ path: `/product/${product.id}` }" aria-label="go to product page">
			<div class="h-[420px] border rounded-xl p-3 relative overflow-hidden bg-center bg-no-repeat bg-contain" :style="`background-image: url(${product.img[0]})`">
				<button :aria-label="`set as${isLiked ? ' not ' : ' '}liked`" class="absolute top-3 right-3" @click.prevent="setLike(product.id)">
					<span :class="`icon-${isLiked ? 'liked' : 'like'}`" class="text-3xl text-gray-500"></span>
				</button>
			</div>
		</router-link>
		<div class="flex justify-between mt-2">
			<p aria-label="product name">{{ product.name }}</p>
			<p class="font-bold" aria-label="product price">{{ product.price.toFixed(2) }} €</p>
		</div>
	</li>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	props: ['product'],
	name: 'ProductCard',
	methods: {
		...mapActions(['setLike'])
	},
	computed: {
		...mapState(['liked']),
		isLiked() {
			return this.liked.find((p) => p === this.product.id);
		}
	}
};
</script>

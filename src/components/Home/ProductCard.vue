<template>
	<li class="w-[320px]">
		<div class="h-[420px] border rounded-xl p-3 relative overflow-hidden bg-center bg-no-repeat bg-contain" :style="`background-image: url(${product.img})`">
			<span :class="`icon-${liked.find((p) => p === product.id) ? 'liked' : 'like'}`" class="absolute top-3 right-3 text-[32px] text-gray-500 cursor-pointer" @click="setLike(product.id)"></span>
		</div>
		<div class="flex justify-between mt-2">
			<p>{{ product.name }}</p>
			<p class="font-bold">{{ product.price.toFixed(2) }} €</p>
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
		...mapState(['liked'])
	}
};
</script>

<template>
	<div class="flex gap-8 justify-between p-4 border border-neutral-700 rounded-xl">
		<img :src="product.img[0]" alt="" class="w-2/6 rounded-md" />
		<div class="flex flex-col w-full justify-between">
			<div class="flex justify-between items-start">
				<div class="flex flex-col">
					<h3 class="sm:text-lg">{{ product.name }}</h3>
					<p class="text-md text-neutral-500">{{ product.price.toFixed(2) }} €</p>
				</div>
				<button class="pt-1" @click="removeToCart(product)">
					<span class="icon icon-delete sm:text-lg"></span>
				</button>
			</div>
			<p class="sm:text-sm text-xs text-neutral-500">Taille : M</p>
			<div class="flex items-center justify-between w-2/3">
				<button class="bg-neutral-700 w-9 aspect-square rounded-full inline-flex justify-center items-center" @click="removeOneToCart(product)"><span class="icon-minus text-lg"></span></button>
				<p>{{ product.quantity }}</p>
				<button class="bg-neutral-700 w-9 aspect-square rounded-full inline-flex justify-center items-center" @click="addToCart(product)"><span class="icon-plus text-lg"></span></button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
	props: ['product'],
	name: 'ProductSidebar',
	methods: {
		...mapActions(['addToCart', 'removeOneToCart', 'removeToCart'])
	}
};
</script>

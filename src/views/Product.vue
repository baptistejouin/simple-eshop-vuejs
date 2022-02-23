<template>
	<div class="container mx-auto mt-[32px]">
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-6">
				<h2 class="text-xl">{{ product.name }}</h2>
				<p>{{ product.price }} €</p>
			</div>
			<div class="col-span-6">
				<img class="max-w-lg border rounded-xl p-3" :src="product.img" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
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
		}
	}
};
</script>

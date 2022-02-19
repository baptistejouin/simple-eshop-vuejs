<template>
	<div class="container mx-auto">
		<h2>{{ product.name }}</h2>
		<p>{{ product.price }} €</p>
		<img :src="product.img" alt="" />
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

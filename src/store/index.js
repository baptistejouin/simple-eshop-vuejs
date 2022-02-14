import { createStore } from 'vuex';

import img00 from '@/assets/img/product/00-0.webp';
import img01 from '@/assets/img/product/01-0.webp';

const store = createStore({
	state: {
		currentProduct: {},
		products: [
			{
				id: 1,
				name: 'Winter Coat',
				price: 300,
				img: img00,
				liked: true
			},
			{
				id: 2,
				name: 'Classic Shirt',
				price: 300,
				img: img01,
				liked: false
			}
		]
	},
	getters: {
		getProducts(state) {
			return state.products;
		}
	},
	mutations: {
		setLike(state, product) {
			product.liked = !product.liked;
		}
	},
	actions: {
		setLike({ commit, state }, productId) {
			const product = state.products.find((p) => productId === p.id);
			commit('setLike', product);
		}
	}
});

export default store;

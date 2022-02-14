import { createStore } from 'vuex';

import img00 from '@/assets/img/product/00-0.webp';
import img01 from '@/assets/img/product/01-0.webp';

const store = createStore({
	state: {
		currentProduct: {},
		currentCategorie: 1,
		products: [
			{
				id: 1,
				name: 'Winter Coat',
				categorie: 2,
				price: 300,
				img: img00,
				liked: true
			},
			{
				id: 2,
				name: 'Classic Shirt',
				categorie: 4,
				price: 230,
				img: img01,
				liked: false
			}
		],
		categories: [
			{
				id: 1,
				label: 'Afficher tout'
			},
			{
				id: 2,
				label: 'Vestes'
			},
			{
				id: 3,
				label: 'Pantalons'
			},
			{
				id: 4,
				label: 'Chemises'
			},
			{
				id: 5,
				label: 'Sacs'
			}
		]
	},
	getters: {
		getProducts: (state) => (categorie) => {
			if (categorie !== 1) {
				return state.products.filter((p) => categorie === p.categorie);
			}
			return state.products;
		},
		getCategories(state) {
			return state.categories;
		},
		getCurrentCategorie(state) {
			return state.currentCategorie;
		}
	},
	mutations: {
		setLike(state, product) {
			product.liked = !product.liked;
		},
		selectCategorie(state, categorieId) {
			state.currentCategorie = categorieId;
		}
	},
	actions: {
		setLike({ commit, state }, productId) {
			const product = state.products.find((p) => productId === p.id);
			commit('setLike', product);
		},
		selectCategorie(context, categorieId) {
			context.commit('selectCategorie', categorieId);
		}
	}
});

export default store;

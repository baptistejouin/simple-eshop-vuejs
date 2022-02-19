import { createStore } from 'vuex'

import products from '@/data/products.js'

function updateLocalStorage(like) {
	localStorage.setItem('liked_products', JSON.stringify(like))
}

const store = createStore({
	state: {
		currentProduct: {},
		currentCategorie: 1,
		products,
		liked: [],
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
		getProduct: (state) => (id) => {
			return state.products.find(p => p.id === id)
		},
		getProducts: (state) => (categorie) => {
			if (categorie !== 1) return state.products.filter((p) => categorie === p.categorie)
			return state.products
		},
		getCategories(state) {
			return state.categories
		},
		getCurrentCategorie(state) {
			return state.currentCategorie
		}
	},
	mutations: {
		setLike(state, product) {
			const item = state.liked.find((p) => p === product.id)
			if (item) state.liked.splice(state.liked.indexOf(product.id), 1)
			else state.liked.push(product.id)
			updateLocalStorage(state.liked)
		},
		selectCategorie(state, categorieId) {
			state.currentCategorie = categorieId
		},
		updateLikedFromLocalStorage(state) {
			const likedProducts = localStorage.getItem('liked_products')
			if (likedProducts) {
				state.liked = JSON.parse(likedProducts)
			}
		}
	},
	actions: {
		setLike({ commit, state }, productId) {
			const product = state.products.find((p) => productId === p.id)
			commit('setLike', product)
		},
		selectCategorie(context, categorieId) {
			context.commit('selectCategorie', categorieId)
		},
		updateLikedFromLocalStorage(context) {
			context.commit('updateLikedFromLocalStorage')
		}
	}
})

export default store

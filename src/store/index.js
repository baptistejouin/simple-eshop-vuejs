import { createStore } from 'vuex'

import products from '@/data/products.js'

function updateLocalStorage(like) {
	localStorage.setItem('liked_products', JSON.stringify(like))
}

const store = createStore({
	state: {
		currentCategorie: 1,
		cart: [],
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
		},
		getCart(state) {
			return state.cart
		},
		getCartTotal(state) {
			let total = { price: 0, product: 0 }
			state.cart.forEach(item => {
				total.price += item.quantity * item.price
				total.product += item.quantity
			})
			return total
		}
	},
	mutations: {
		setLike(state, product) {
			const item = state.liked.find((p) => p === product.id)
			if (item) state.liked.splice(state.liked.findIndex(p => p === product.id), 1)
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
		},
		addToCart(state, product) {
			const item = state.cart.find((p) => p.id === product.id)
			if (item) {
				item.quantity++
			} else {
				product.quantity = 1
				state.cart.push(product)
			}
		},
		removeOneToCart(state, product) {
			const item = state.cart.find((p) => p.id === product.id)

			if (item.quantity <= 1) {
				this.commit('removeToCart', product)
			} else {
				item.quantity--
			}
		},
		removeToCart(state, product) {
			const item = state.cart.find((p) => p.id === product.id)

			if (item) state.cart.splice(state.cart.findIndex(p => p.id === product.id), 1)
		}

	},
	actions: {
		setLike({ commit, state }, productId) {
			const product = state.products.find((p) => productId === p.id)
			commit('setLike', product)
		},
		selectCategorie({ commit }, categorieId) {
			commit('selectCategorie', categorieId)
		},
		updateLikedFromLocalStorage({ commit }) {
			commit('updateLikedFromLocalStorage')
		},
		addToCart({ commit }, product) {
			commit('addToCart', product)
		},
		removeOneToCart({ commit }, product) {
			commit('removeOneToCart', product)
		},
		removeToCart({ commit }, product) {
			commit('removeToCart', product)
		}
	}
})

export default store

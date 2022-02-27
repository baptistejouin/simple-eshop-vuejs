<template>
	<Teleport to="#app">
		<div :class="active ? '' : 'invisible'" :aria-hidden="!active" class="visible transition-[visibility] delay-50 fixed inset-0 z-10">
			<Transition name="cart-transition" enter-active-class="translate-x-full" leave-active-class="translate-x-full">
				<aside v-show="active" class="transition-transform duration-50 ease-out w-full h-full bg-black ml-auto text-white py-8 flex flex-col justify-between sm:max-w-[450px]">
					<div class="pb-8 px-8 border-b border-neutral-700 flex justify-between items-center">
						<h2 class="text-xl font-bold">Mon panier</h2>
						<button @click="$emit('toggleShopCart')">
							<span class="icon icon-close text-3xl"></span>
						</button>
					</div>
					<div class="p-8 overflow-scroll flex flex-col gap-4 h-full">
						<div v-if="getCart.length === 0" class="text-gray-300">Aucun articles à afficher.</div>
						<template v-else>
							<ProductSidebar v-for="product in getCart" :key="product.id" :product="product" />
						</template>
					</div>
					<div class="flex justify-between items-center pt-8 px-8 border-t border-neutral-700">
						<div>Total: {{ getCartTotal.price.toFixed(2) }} €</div>
						<button class="bg-neutral-700 rounded-lg px-4 py-2">Commander</button>
					</div>
				</aside>
			</Transition>
			<Transition name="bg-transition" enter-active-class="opacity-0" leave-active-class="opacity-0">
				<div v-show="active" class="fixed inset-0 bg-black bg-opacity-25 -z-10 transition-opacity duration-50 ease-out" @click="$emit('toggleCart')"></div>
			</Transition>
		</div>
	</Teleport>
</template>

<script>
import { mapGetters } from 'vuex';

import ProductSidebar from '@/components/Sidebar/ProductSidebar.vue';

export default {
	name: 'CartSidebar',
	props: ['active'],
	emits: ['toggleCart'],
	components: {
		ProductSidebar
	},
	computed: {
		...mapGetters(['getCart', 'getCartTotal'])
	}
};
</script>

<template>
	<Teleport to="#app">
		<div :class="active ? '' : 'invisible'" :aria-hidden="!active" class="visible transition-[visibility] delay-50 fixed inset-0 z-10">
			<Transition name="cart-transition" enter-active-class="translate-x-full" leave-active-class="translate-x-full">
				<aside v-show="active" class="transition-transform duration-50 ease-out w-full h-full bg-black ml-auto text-white py-8 sm:max-w-[450px]">
					<h2 class="text-xl font-bold pb-8 px-8 border-b border-neutral-700">Mon panier</h2>
					<div class="px-8 pt-8">
						<ProductSidebar />
					</div>
				</aside>
			</Transition>
			<Transition name="bg-transition" enter-active-class="opacity-0" leave-active-class="opacity-0">
				<div v-show="active" class="fixed inset-0 bg-black bg-opacity-25 -z-10 transition-[opacity] duration-50 ease-out" @click="$emit('toggleShopCart')"></div>
			</Transition>
		</div>
	</Teleport>
</template>

<script>
import ProductSidebar from '@/components/Sidebar/ProductSidebar.vue';

export default {
	props: ['active'],
	emits: ['toggleShopCart'],
	components: {
		ProductSidebar
	},
	name: 'CartSidebar'
};
</script>

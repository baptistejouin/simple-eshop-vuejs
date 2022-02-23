<template>
	<teleport to="#app">
		<div :class="active ? 'visible' : 'invisible'" class="fixed inset-0 bg-black bg-opacity-25 z-10" @click="handleShopCart">
			<aside :class="active ? 'translate-x-0' : ''" class="translate-x-full transition-transform ease-out w-full max-w-[450px] h-full bg-black ml-auto text-white py-8">
				<h2 class="text-xl font-bold pb-8 px-8 border-b border-neutral-700">Shopping cart</h2>
				<div class="px-8 pt-8">
					<div class="flex gap-8 justify-between p-4 border border-neutral-700 rounded-xl">
						<img src="@/assets/img/product/02-0.webp" alt="" class="w-2/6 rounded-md" />
						<div class="flex flex-col w-full justify-between">
							<div class="flex flex-col">
								<h3 class="text-lg">Winter coat</h3>
								<p class="text-md text-neutral-500">Prix : 650.00 €</p>
							</div>
							<p class="text-sm text-neutral-500">Taille : M</p>
							<div class="flex items-center justify-between w-2/3">
								<button class="bg-neutral-700 w-9 aspect-square rounded-full inline-flex justify-center items-center"><span class="icon-minus text-lg"></span></button>
								<p>1</p>
								<button class="bg-neutral-700 w-9 aspect-square rounded-full inline-flex justify-center items-center"><span class="icon-plus text-lg"></span></button>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</div>
	</teleport>
</template>

<script>
export default {
	props: ['active', 'handleShopCart'],
	name: 'CartSidebar'
};
</script>

<template>
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
</template>
<script>
export default {
	name: 'ProductSidebar'
};
</script>

<template>
	<li class="w-[320px]">
		<div class="h-[420px] border rounded-xl p-3 relative overflow-hidden bg-center bg-no-repeat bg-contain" :style="`background-image: url(${product.img})`">
			<span :class="`icon-${product.liked ? 'liked' : 'like'}`" class="absolute top-3 right-3 text-[32px] text-gray-500 cursor-pointer" @click="handleLike(product.id)"></span>
		</div>
		<div class="flex justify-between mt-2">
		<p>{{ product.name }}</p>
		<p class="font-bold">{{ product.price }} €</p>

		</div>
	</li>
</template>

<script>
export default {
	props: ['product', 'handleLike'],
	name: 'ProductCard'
}
</script>
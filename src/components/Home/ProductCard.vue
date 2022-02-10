<template>
	<li class="w-[320px] h-[530px]">
		<div class="h-5/6 border rounded-xl p-3 relative overflow-hidden bg-center bg-no-repeat" :style="`background-image: url(${img})`">
			<span :class="`icon-${liked ? 'liked' : 'like'}`" class="absolute top-3 right-3 text-[32px] text-gray-500 cursor-pointer" @click="handleLike(id)"></span>
		</div>
		<div class="flex justify-between mt-2">
		<p>{{ name }}</p>
		<p class="font-bold">{{ price }} €</p>

		</div>
	</li>
</template>

<script>
export default {
	props: ['name', 'price', 'img', 'liked', 'handleLike', 'id'],
	name: 'ProductCard'
}
</script>
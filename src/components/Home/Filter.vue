<template>
	<li
		class="px-3 py-1 rounded-md text-base cursor-pointer"
		:class="[active ? 'text-white bg-neutral-900' : 'bg-gray-200 text-gray-500']"
	>
		<slot></slot>
	</li>
</template>

<script>
export default {
	props: {
		active: Boolean,
	},
	name: 'Filter',
}
</script>
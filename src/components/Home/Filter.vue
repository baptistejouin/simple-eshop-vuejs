<template>
	<li class="px-3 py-1 rounded-md text-base cursor-pointer" :class="[filter.active ? 'text-white bg-neutral-900' : 'bg-gray-200 text-gray-500']">
		{{ filter.label }}
	</li>
</template>

<script>
export default {
	props: ['filter'],
	name: 'Filter'
};
</script>

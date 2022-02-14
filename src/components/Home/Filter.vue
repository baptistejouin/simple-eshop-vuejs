<template>
	<li class="px-3 py-1 rounded-md text-base cursor-pointer" :class="[categorie.id === getCurrentCategorie ? 'text-white bg-neutral-900' : 'bg-gray-200 text-gray-500']" @click="selectCategorie(categorie.id)" :aria-label="`Show '${categorie.label}'`">
		{{ categorie.label }}
	</li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	props: ['categorie'],
	name: 'Filter',
	methods: {
		...mapActions(['selectCategorie'])
	},
	computed: {
		...mapGetters(['getCurrentCategorie'])
	}
};
</script>

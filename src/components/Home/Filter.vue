<template>
	<li class="px-3 py-1 rounded-md text-base" :class="[categorie.id === getCurrentCategorie ? 'text-white bg-neutral-900' : 'bg-gray-200 text-gray-500']">
		<button :aria-label="`Show '${categorie.label}'`" @click="selectCategorie(categorie.id)">
			{{ categorie.label }}
		</button>
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

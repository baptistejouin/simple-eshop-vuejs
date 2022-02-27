<template>
	<header>
		<Navbar />
	</header>
	<router-view />
	<footer class="flex flex-col items-center text-neutral-400 text-sm mt-8 py-4">
		<a href="https://github.com/baptistejouin" target="_blank">My Github</a>
		<a href="https://www.apc.fr/" target="_blank">A.P.C official website</a>
	</footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
	name: 'App',
	components: {
		Navbar
	}
};
</script>

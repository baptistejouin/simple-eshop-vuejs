<template>
	<header class="w-full">
		<Navbar />
	</header>
	<router-view />
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

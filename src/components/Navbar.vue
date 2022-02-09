<template>
	<nav class="flex px-[84px] py-[32px] items-center border-b">
		<router-link :to="{ name: 'Home' }"><h1 class="text-5xl font-bold">A.P.C</h1></router-link>
		<ul class="flex ml-auto space-x-3">
			<li v-for="navItem in navItems" :key="navItem.name">
				<div v-if="navItem.methods" @click="navItem.methods" :aria-label="navItem.label">
					<span
						:class="`icon-${navItem.icon}`"
						class="border rounded-full p-3 text-[24px] hover:bg-gray-50 cursor-pointer"
					></span>
				</div>
				<router-link v-else :to="{ path: navItem.path }">
					<span
						:class="`icon-${navItem.icon}`"
						class="border rounded-full p-3 text-[24px] hover:bg-gray-50"
					></span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		navItems: Array,
	}
}
</script>
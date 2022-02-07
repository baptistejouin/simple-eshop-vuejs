<template>
	<HelloWorldVue msg="Hello with Vite"></HelloWorldVue>
</template>

<script>

import HelloWorldVue from "@/components/HelloWorld.vue"

export default {
	name: 'Home',
	components : {
		HelloWorldVue
	}
}
</script>
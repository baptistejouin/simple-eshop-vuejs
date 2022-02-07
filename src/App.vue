<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/account">Account</router-link>
	</nav>
	<router-view></router-view>
</template>

<style lang="sass">
  @import '@/assets/styles/global'
</style>
<template>
	<article class="min-h-full flex flex-col bg-gray-200">
		<router-view />
		<AppNavigation />
	</article>
</template>

<script>
import { mapActions } from "vuex"
import AppNavigation from "./components/AppNavigation"
export default {
	name: "App",
	components: {
		AppNavigation
	},
	methods: {
		...mapActions([
			"getSavedItemsFromLocalStorage"
		])
	},
	mounted() {
		this.getSavedItemsFromLocalStorage()
	}
}
</script>

<style>
	@tailwind base;

	h1 {
		@apply text-2xl;
	}

	@tailwind components;
	@tailwind utilities;

	html, body {
		height: 100%;
	}
</style>

<template>
	<article class="min-h-full flex flex-col bg-gray-100">
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

	html, body {
		height: 100%;
		@apply
			bg-gray-200;
	}

	@tailwind components;
	@tailwind utilities;
</style>

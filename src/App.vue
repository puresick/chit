<template>
	<article class="min-h-full flex flex-col bg-gray-100">
		<router-view />
		<AppButton
			v-if="$route.path === '/saved'"
			float
			class="fixed bottom-0 mb-32 self-center"
			:action="getSavedItemsFromLocalStorage"
			:loading="loading"
		>
			<refresh-cw-icon />
		</AppButton>
		<AppNavigation />
	</article>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { RefreshCwIcon } from "vue-feather-icons"

import AppButton from "./components/AppButton"
import AppNavigation from "./components/AppNavigation"

export default {
	name: "App",
	components: {
		AppButton,
		AppNavigation,
		RefreshCwIcon
	},
	computed: {
		...mapState([
			"loading"
		])
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

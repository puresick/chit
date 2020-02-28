<template>
	<article class="min-h-full w-full flex flex-col max-w-screen-sm">
		<router-view />
		<AppNavigation />
	</article>
</template>

<script>
import { mapActions, mapState } from "vuex"

import AppNavigation from "./components/AppNavigation"

export default {
	name: "App",
	components: {
		AppNavigation
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
			bg-gray-100;
	}

	body {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	@tailwind components;
	@tailwind utilities;
</style>

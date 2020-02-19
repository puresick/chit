<template>
	<nav class="fixed bottom-0 mb-16 h-12 w-1/3 self-center flex justify-around items-center bg-white text-gray-600 rounded-full overflow-hidden border-gray-300 border-2">
		<router-link
			class="bg-white h-full w-full flex flex-col items-center justify-center text-xs rounded-full"
			activeClass="text-white bg-blue-600"
			v-for="(route, index) of routes"
			:to="route.path"
			exact
		>
			<search-icon
				v-if="index === 0"
			>
			</search-icon>
			<heart-icon
				v-else
			>
			</heart-icon>
		</router-link>
	</nav>
</template>

<script>
	import { SearchIcon, HeartIcon } from "vue-feather-icons"

	export default {
		components: {
			HeartIcon,
			SearchIcon
		},
		name: "AppNavigation",
		data() {
			return {
				routes: [
					{
						path: "/",
						label: "Search"
					},
					{
						path: "/saved",
						label: "Saved"
					}
				]
			}
		}
	}
</script>

<style scoped>
	@media(hover: hover) and (pointer: fine) {
		a:hover {
			color: black !important;
		}
	}

	nav {
		box-shadow: 0 0.3rem 0 0.4rem #cbd5e0;
	}
</style>

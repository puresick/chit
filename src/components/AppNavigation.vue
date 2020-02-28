<template>
	<nav class="fixed bottom-0 mb-16 h-12 w-48 self-center flex justify-around items-center bg-white text-gray-600 rounded-lg overflow-hidden border-gray-500 border-2 shadow-lg">
		<router-link
			class="bg-white h-full w-full flex flex-col items-center justify-center text-xs"
			activeClass="text-white bg-gray-700"
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
</style>

<template>
	<nav class="fixed bottom-0 mb-8 h-20 w-1/2 self-center flex justify-around items-center shadow text-gray-600 rounded-lg overflow-hidden">
		<router-link
			class="bg-white hover:text-black h-full w-full flex flex-col items-center text-xs pt-4"
			activeClass="text-black"
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
			{{ route.label}}
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

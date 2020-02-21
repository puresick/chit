<template>
	<article class="flex-grow">
		<section class="fixed top-0 justify-between p-4 w-full max-w-screen-sm">
			<input
				:value="searchQuery"
				:disabled="loading"
				@input="setSearchQuery"
				@keyup.enter="searchNintendoApi"
				class="bg-white p-2 rounded-full flex-grow border-4 border-gray-500 focus:border-gray-700 w-full"
			>
			<!-- <AppButton                            -->
			<!-- 	:disabled="loading"                  -->
			<!-- 	:action="searchNintendoApi"          -->
			<!-- >                                     -->
			<!-- 	{{ loading ? "loading" : "search" }} -->
			<!-- </AppButton>                          -->
		</section>
		<section
			class="flex flex-col items-center pt-16 pb-32"
		>
			<AppLoading
				v-if="loading"
			/>
			<ul
				class="w-full"
			>
				<ListItem
					v-for="item in searchResult"
					:item="item"
				/>
			</ul>
		</section>
	</article>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"

import AppButton from "../components/AppButton"
import AppLoading from "../components/AppLoading"
import ListItem from "../components/ListItem"

export default {
	name: "AppSearch",
	components: {
		AppButton,
		AppLoading,
		ListItem
	},
	computed: {
		...mapState([
			"loading",
			"searchQuery",
			"searchResult",
			"savedItems"
		])
	},
	methods: {
		...mapMutations([
			"setSearchQuery"
		]),
		...mapActions([
			"searchNintendoApi"
		])
	}
}
</script>

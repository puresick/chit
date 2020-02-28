<template>
	<article class="flex-grow">
		<section class="fixed top-0 justify-between p-4 w-full max-w-screen-sm">
			<input
				v-model="query"
				placeholder="enter search ..."
				:disabled="loading"
				@keyup.enter="search"
				class="placeholder-gray-700 bg-gray-400 p-2 rounded-lg flex-grow border-2 border-gray-500 focus:border-gray-700 w-full"
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
	data() {
		return {
			query: ""
		}
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
		]),
		search() {
			this.searchNintendoApi(this.query)
		}
	}
}
</script>

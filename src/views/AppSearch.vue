<template>
	<article class="flex-grow">
		<section class="sticky top-0 flex justify-between px-2 pt-4">
			<input
				:value="searchQuery"
				:disabled="loading"
				@input="setSearchQuery"
				@keyup.enter="searchNintendoApi"
				class="bg-white shadow p-2 rounded hover:shadow-md flex-grow"
			>
			<!-- <AppButton                            -->
			<!-- 	:disabled="loading"                  -->
			<!-- 	:action="searchNintendoApi"          -->
			<!-- >                                     -->
			<!-- 	{{ loading ? "loading" : "search" }} -->
			<!-- </AppButton>                          -->
		</section>
		<section>
			<ul>
				<li
					v-if="searchResult.length === 0"
					class="flex m-2 p-2 justify-center text-gray-500"
				>
					no results
				</li>
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
import ListItem from "../components/ListItem"

export default {
	name: "AppSearch",
	components: {
		AppButton,
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

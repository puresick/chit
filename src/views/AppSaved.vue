<template>
	<article class="flex flex-col flex-grow pb-32 items-center">
		<span
			v-if="savedItems.length === 0 && !loading"
		>
			No items saved yet!
		</span>
		<AppLoading
			v-if="loading"
		/>
		<ul
			class="w-full"
		>
			<ListItem
				v-for="item in savedItems"
				:item="item"
				:action="removeItem"
				action-label="remove"
			/>
		</ul>
	</article>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"

import AppLoading from "../components/AppLoading"
import ListItem from "../components/ListItem"

export default {
	name: "AppSaved",
	components: {
		AppLoading,
		ListItem
	},
	computed: {
		...mapState([
			"loading",
			"savedItems"
		])
	},
	methods: {
		...mapActions([
			"getSavedItemsFromLocalStorage",
			"removeItem"
		])
	},
	mounted() {
		this.getSavedItemsFromLocalStorage()
	}
}
</script>

<style scoped>
</style>

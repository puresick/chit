<template>
	<article class="flex-grow">
		<section
			class="pb-32"
		>
			<ul>
				<span
					v-if="savedItems.length === 0"
				>
					No items saved yet!
				</span>
				<ListItem
					v-for="item in savedItems"
					:item="item"
					:action="removeItem"
					action-label="remove"
				/>
			</ul>
		</section>
		<AppButton
			float
			class="fixed bottom-0 right-0 mr-12 mb-16"
			:action="getSavedItemsFromLocalStorage"
			:loading="loading"
		>
			<refresh-cw-icon />
		</AppButton>
	</article>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
import { RefreshCwIcon } from "vue-feather-icons"

import AppButton from "../components/AppButton"
import ListItem from "../components/ListItem"

export default {
	name: "AppSaved",
	components: {
		AppButton,
		ListItem,
		RefreshCwIcon
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
	}
}
</script>

<style scoped>
</style>

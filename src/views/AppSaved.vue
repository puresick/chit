<template>
	<article class="flex-grow">
		<section>
		<vue-pull-refresh
			:on-refresh="getSavedItemsFromLocalStorage"
			:config="{
				startLabel: 'pull to refresh',
				readyLabel: 'release to refresh',
				loadingLabel: 'loading',
				errorLabel: 'error'
			}"
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
		</vue-pull-refresh>
		</section>
	</article>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
import VuePullRefresh from "vue-pull-refresh"

import ListItem from "../components/ListItem"

export default {
	name: "AppSaved",
	components: {
		ListItem,
		VuePullRefresh
	},
	computed: {
		...mapState([
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

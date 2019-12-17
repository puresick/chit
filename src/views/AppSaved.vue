<template>
	<article>
		<section>
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
	</article>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
import ListItem from "../components/ListItem"

export default {
	name: "AppSaved",
	components: {
		ListItem
	},
	computed: {
		...mapState([
			"savedItems"
		])
	},
	methods: {
		...mapActions([
			"removeItem"
		])
	}
}
</script>

<style scoped>
</style>

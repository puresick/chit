<template>
	<li
		class="item flex mx-2 mt-2 mb-4 items-stretch bg-white h-40 overflow-hidden border-2 border-gray-300"
		:class="{
			'opacity-50': loading
		}"
	>
		<picture
			class="w-32 flex flex-grow-0 flex-shrink-0"
		>
			<source :srcset="coverImage">
			<img :src="coverImage" class="object-cover h-full flex-shrink-0">
		</picture>
		<ul class="flex flex-col flex-grow p-4 justify-between overflow-hidden">
			<li class="text-xl font-bold truncate">
				{{ item.title }}
			</li>
			<!-- <li>                                                                        -->
			<!-- 	<p v-if="item.price_sorting_f === 999999">&nbsp;</p>                       -->
			<!-- 	<p v-else-if="item.price_has_discount_b" class="text-red-400">on sale!</p> -->
			<!-- 	<p v-else class="text-gray-400">regular price</p>                          -->
			<!-- </li>                                                                       -->
			<li
				class="text-right text-2xl font-bold"
				:class="{ 'text-red-600': item.price_has_discount_b }"
			>
				{{ price }}
			</li>
			<li class="flex justify-around">
				<a
					class="hover:text-blue-400"
					:href="eShopLink"
					target="_blank"
				>
					<ShoppingCartIcon>
					</ShoppingCartIcon>
				</a>
				<AppButton
					:action="itemAction"
				>
					<HeartIcon
						class="hover:text-red-200"
						:class="{ 'text-red-600': isSaved }"
					>
					</HeartIcon>
				</AppButton>
			</li>
		</ul>
	</li>
</template>

<script>
import { mapState } from "vuex"
import { HeartIcon, ShoppingCartIcon } from "vue-feather-icons"
import AppButton from "./AppButton"

export default {
	name: "ListItem",
	components: {
		AppButton,
		HeartIcon,
		ShoppingCartIcon
	},
	props: {
		item: {
			default: () => ({}),
			type: Object
		},
		action: {
			default: () => {},
			type: Function
		}
	},
	computed: {
		...mapState([
			"loading",
			"savedItems"
		]),
		coverImage() {
			return `http:${this.item.image_url_sq_s}`
		},
		eShopLink() {
			return `https://nintendo.${"de"}${this.item.url}`
		},
		price() {
			const value = this.item.price_sorting_f
			switch (value) {
				case 999999:
					return "n/a"
				default:
					return `${this.item.price_sorting_f}€`
			}
		},
		isSaved() {
			if (
				this.savedItems.filter(
					saved => saved.fs_id === this.item.fs_id
				).length > 0
			) {
				return true
			} else {
				return false
			}
		}
	},
	methods: {
		itemAction() {
			// NOTE: dispatching the action in its own method to prevent execution on render if it is set directly with payload on the html element
			this.$store.dispatch("itemAction", this.item)
		}
	}
}
</script>

<style scoped>
	.item {
		box-shadow: 0 0.3rem 0 0.2rem #edf2f7;
		border-radius: 2rem;
	}
</style>

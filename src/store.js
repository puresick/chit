import Vue from "vue"
import Vuex from "vuex"

import { search } from "./helpers/api"

Vue.use(Vuex)

const store = new Vuex.Store({
	// NOTE: enable strict mode only for development
	// because it can be performance heavy
	strict: process.env.NODE_ENV !== "production",
	state: {
		loading: false,
		searchQuery: "",
		searchResult: [],
		savedItems: []
	},
	mutations: {
		saveItem: (state, item) => {
			state.savedItems.push(item)
		},
		isLoading: (state, boolean) => {
			state.loading = boolean
		},
		setSearchQuery: (state, event) => {
			const { value } = event.target
			state.searchQuery = value
		},
		setSearchResult: (state, value) => {
			state.searchResult = value
		},
		setSavedItems: (state, value) => {
			state.savedItems = value
		}
	},
	actions: {
		saveItem: ({ commit, state }, item) => {
			commit("saveItem", item)
			localStorage.setItem("savedItems", state.savedItems.map(item => item.fs_id))
		},
		removeItem: ({ commit, state }, item) => {
			const items = state.savedItems.filter(
				savedItem => savedItem.fs_id !== item.fs_id
			)
			commit("setSavedItems", items)

			localStorage.setItem("savedItems", state.savedItems.map(item => item.fs_id))
		},
		isItemAlreadySaved: ({ state }, item) => {
			const { savedItems } = state
			if (
				savedItems.filter(
					saved => saved.fs_id === item.fs_id
				).length > 0
			) {
				return true
			} else {
				return false
			}
		},
		itemAction: async ({ dispatch }, item) => {
			const itemState = await dispatch("isItemAlreadySaved", item)

			if (itemState) {
				dispatch("removeItem", item)
			} else {
				dispatch("saveItem", item)
			}
		},
		searchNintendoApi: async ({ commit, state }) => {
			const { searchQuery } = state

			commit("setSearchResult", [])
			commit("isLoading", true)

			if (searchQuery === "") {
				commit("setSearchResult", [])
			} else {
				const result = await search({
					query: searchQuery,
					type: "title"
				})

				commit("setSearchResult", result)
			}
		
			commit("isLoading", false)
		},
		getSavedItemsFromLocalStorage: async ({ commit, dispatch }) => {
			const ids = localStorage.getItem("savedItems")
			const items = []
			if (!!ids) {
				const idCollection = ids.split(",")

				for (const id of idCollection) {
					const query = parseInt(id)

					if (typeof query === "number") {
						const result = await search({ query, type: "id" })
						items.push(result[0])
					}
				}
			}

			commit("setSavedItems", items)
		}
	}
})

export default store

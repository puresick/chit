import Vue from "vue"
import VueRouter from "vue-router"

import AppSaved from "./views/AppSaved"
import AppSearch from "./views/AppSearch"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		component: AppSearch
	},
	{
		path: "/saved",
		component: AppSaved
	}
]

const router = new VueRouter({
	routes
})

export default router

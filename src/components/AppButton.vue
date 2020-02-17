<template>
	<button
		@click="action"
		:class="{
			'rounded-full bg-red-500 text-white h-12 w-12 flex items-center justify-center': float
		}"
	>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "AppButton",
		props: {
			action: {
				default: () => {},
				type: Function
			},
			float: {
				default: false,
				type: Boolean
			}
		}
	}
</script>

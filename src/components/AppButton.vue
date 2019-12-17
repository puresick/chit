<template>
	<button
		@click="action"
	>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "AppButton",
		props: {
			action: {
				type: Function,
				default: () => {}
			}
		}
	}
</script>

<template>
	<button
		@click="action"
		:class="{
			'rounded-full bg-red-500 text-white h-12 w-12 flex items-center justify-center': float,
			'bg-red-500': !loading && float,
			'bg-yellow-500 rotate': loading && float
		}"
		:disable="loading"
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
			},
			loading: {
				default: false,
				type: Boolean
			}
		}
	}
</script>

<style scoped>
	.rotate {
		animation-duration: 1s;
		animation-name: rotateFullCircle;
		animation-iteration-count: infinite;
	}

	@keyframes rotateFullCircle {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>

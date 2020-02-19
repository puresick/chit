<template>
	<button
		@click="action"
		:class="{
			'rounded-full bg-red-400 text-white h-12 w-12 flex items-center justify-center': float,
			'float bg-red-400': !loading && float,
			'float--loading bg-yellow-400 text-gray-800': loading && float
		}"
		:disable="loading"
	>
		<span
			:class="{
				'rotate': loading && float
			}"
		>
			<slot />
		</span>
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

	.float {
		box-shadow: 0 0.3rem 0 0.4rem #f56565;
	}

	.float--loading {
		box-shadow: 0 0.3rem 0 0.4rem #ecc94b;
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

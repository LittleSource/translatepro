<template>
	<var-style-provider :style-vars="styleVars">
		<var-app-bar :elevation="false" title-position="center">
			<template #left>
				<var-button text> {{ from }} </var-button>
			</template>
			<var-button round text @click="exchangeLanguage">
				<IcOutlineCompareArrows />
			</var-button>
			<template #right>
				<var-button text> {{ to }} </var-button>
			</template>
		</var-app-bar>
	</var-style-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		from: {
			type: String,
			default: "英文",
		},
		to: {
			type: String,
			default: "中文",
		},
	},
	setup(props, ctx) {
		const styleVars = {
			"--app-bar-left-gap": "40px",
			"--app-bar-right-gap": "40px",
		};
		const exchangeLanguage = () => {
			ctx.emit("update:from", props.to);
			ctx.emit("update:to", props.from);
		};
		return { styleVars, exchangeLanguage };
	},
});
</script>

<style scoped></style>

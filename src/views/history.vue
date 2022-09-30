<template>
	<var-app-bar :elevation="false" title="历史记录" title-position="center">
		<template #right>
			<var-button round text>
				<var-icon name="magnify" :size="24" />
			</var-button>
		</template>
	</var-app-bar>
	<var-list>
		<var-cell :key="item" v-for="item in list">
			列表项: {{ item }}
		</var-cell>
	</var-list>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	setup() {
		const list = ref<number[]>([]);
		return { list };
	},
});
</script>

<style scoped></style>

<template>
	<var-app-bar :elevation="false" title="历史记录" title-position="center">
		<template #right>
			<var-button round text>
				<var-icon name="magnify" :size="24" />
			</var-button>
		</template>
	</var-app-bar>
	<var-list>
		<var-cell :key="item" v-for="item in history" :title="item.form" :border="true" :desc="item.to" />
	</var-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from 'pinia'
import { useHistoryStore } from "@/store/modules/history";
export default defineComponent({
	setup() {
		const store = useHistoryStore()
		const { history } = storeToRefs(store)
		return { history };
	},
});
</script>

<style scoped>

</style>

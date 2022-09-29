<script setup lang="ts">
import { ref } from "vue";
import Index from "@/views/index.vue";
import History from "@/views/history.vue";
const active = ref(0);
const pageView = ref([Index, History]);
</script>
<template>
	<div>
		<component :is="pageView[active]" />
		<var-bottom-navigation fixed v-model:active="active">
			<var-bottom-navigation-item label="首页" icon="home" />
			<var-bottom-navigation-item label="历史" icon="refresh" />
		</var-bottom-navigation>
	</div>
</template>

<style>
html,
body {
	margin: 0;
	padding: 0;
	color: #000;
}
</style>

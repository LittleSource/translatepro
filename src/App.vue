<script setup lang="ts">
import { ref } from "vue";
import Index from "@/views/index/Index.vue";
import History from "@/views/History.vue";
import Setting from "@/views/setting/index.vue";
const active = ref(0);
const pageView = [Index, History, Setting];
</script>
<template>
	<div>
		<component :is="pageView[active]" />
		<var-bottom-navigation fixed v-model:active="active">
			<var-bottom-navigation-item label="首页" icon="home" />
			<var-bottom-navigation-item label="历史" icon="refresh" />
			<var-bottom-navigation-item label="设置" icon="cog-outline" />
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

:root {
	--app-bar-height: 42px;
}
</style>

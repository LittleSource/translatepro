<script setup lang="ts">
import { ref } from "vue";

const value = ref("");
const active = ref(0);
</script>
<template>
	<div>
		<var-tabs color="#2979ff">
			<var-tab style="color: #fff">英文</var-tab>
			<var-tab style="color: #fff"
				><var-icon style="color: #fff" name="heart-outline"
			/></var-tab>
			<var-tab style="color: #fff">中文</var-tab>
		</var-tabs>
		<div class="p-2">
			<var-input
				placeholder="请输入文本"
				textarea
				:rows="4"
				v-model="value"
			/>
		</div>
		<div class="px-4 py-2 flex justify-between">
			<var-space :size="[10, 10]">
				<var-button round>
					<var-icon name="plus" />
				</var-button>
				<var-button round>
					<var-icon name="information" />
				</var-button>
				<var-button round>
					<var-icon name="check" />
				</var-button>
				<var-button round>
					<var-icon name="warning" />
				</var-button>
				<var-button round>
					<var-icon name="window-close" />
				</var-button>
			</var-space>
			<var-button type="primary">翻译</var-button>
		</div>
		<div class="p-4">1111</div>
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

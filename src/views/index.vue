<template>
	<div class="page">
		<!-- 顶部 -->
		<var-tabs color="#2979ff">
			<var-tab style="color: #fff">英文</var-tab>
			<var-tab style="color: #fff"><IcOutlineCompareArrows /></var-tab>
			<var-tab style="color: #fff">中文</var-tab>
		</var-tabs>
		<!-- 文本域 -->
		<div class="bg-white">
			<div class="px-3 py-2">
				<var-input
					placeholder="请输入文本"
					textarea
					:rows="5"
					v-model="inputText"
				/>
			</div>
		</div>
		<!-- 工具按钮 -->
		<div
			class="bg-white px-4 py-2 flex justify-between border-b-1 border-gray-300"
		>
			<var-space :size="[10, 10]">
				<var-button
					round
					:disabled="inputText.length == 0"
					@click="clearClick"
				>
					<var-icon name="window-close" />
				</var-button>
				<var-button round>
					<IcTwotoneCopyAll />
				</var-button>
				<var-button round>
					<IcBaselineVolumeUp />
				</var-button>
				<var-button round>
					<var-icon name="image" />
				</var-button>
				<var-button round>
					<var-icon name="checkbox-blank-outline" />
				</var-button>
			</var-space>
			<var-button type="primary" @click="tranlateSubmit">翻译</var-button>
		</div>
		<!-- 翻译结果 -->
		<div class="p-4">1111</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { tranlate } from "../api/caiyun";
export default defineComponent({
	setup() {
		const inputText = ref("");
		const tranlateSubmit = () => {
			tranlate([inputText.value], "auto2zh").then((res) => {
				console.log(res);
			});
		};
		const clearClick = () => {
			inputText.value = "";
		};
		return { inputText, clearClick, tranlateSubmit };
	},
});
</script>

<style scoped>
.page {
	background-color: #fafafa;
	height: 100vh;
}
</style>

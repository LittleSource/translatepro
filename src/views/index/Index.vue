<template>
	<div class="page">
		<!-- 顶部 -->
		<TopBar v-model:from="from" v-model:to="to" />
		<!-- 文本域 -->
		<div class="bg-white">
			<div class="px-3 py-2">
				<var-input placeholder="请输入文本" textarea :rows="5" v-model="inputText" />
			</div>
		</div>
		<!-- 工具按钮 -->
		<div class="bg-white px-4 py-2 flex justify-between border-b-1 border-gray-300">
			<var-space :size="[10, 10]">
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
				<var-button round :disabled="inputText.length == 0" @click="clearClick">
					<var-icon name="window-close" />
				</var-button>
			</var-space>
			<var-button type="primary" :loading="loading" loading-type="cube" @click="tranlateSubmit">翻译</var-button>
		</div>
		<!-- 翻译结果 -->
		<div class="p-4">{{ resultText }}</div>
		<!-- 消息条 -->
		<var-snackbar v-model:show="messageShow" position="center" type="error" :duration="3000">
			{{ messageText }}
		</var-snackbar>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { tranlate } from "@/api/google";
import TopBar from "./TopBar.vue";
import { useHistoryStore } from '@/store/modules/history'
import { useSettingStore } from '@/store/modules/setting'
export default defineComponent({
	setup() {
		const from = ref("中文");
		const to = ref("英文");
		const inputText = ref("");
		const resultText = ref("");
		const loading = ref(false);
		const messageShow = ref(false);
		const messageText = ref("");
		const historyStore = useHistoryStore();
		const settingStore = useSettingStore();
		const tranlateSubmit = () => {
			if (loading.value || inputText.value.trim() == "") {
				return;
			}
			loading.value = true;
			tranlate({
				to: to.value,
				from: from.value,
				text: inputText.value.trim(),
			},
				settingStore.getSetting("api_key")
			).then((res) => {
				console.log(res);
				resultText.value = res;
				historyStore.addRow({
					form: inputText.value.trim(),
					to: res,
					time: new Date().getTime()
				})
			})
				.catch((e) => {
					messageShow.value = true;
					messageText.value = e.message;
				})
				.finally(() => {
					loading.value = false;
				});
		};
		const clearClick = () => {
			inputText.value = "";
		};
		return {
			inputText,
			resultText,
			from,
			to,
			clearClick,
			tranlateSubmit,
			loading,
			messageShow,
			messageText,
		};
	},
	components: {
		TopBar,
	},
});
</script>

<style scoped>
.page {
	background-color: #fafafa;
	height: 100vh;
}
</style>

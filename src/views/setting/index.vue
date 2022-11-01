<template>
    <div>
        <var-app-bar :elevation="false" title="设置" title-position="center" />
        <var-list>
            <var-cell @click="showApiKey" :title="`API KEY`" :border="true" :description="'1231'" />
        </var-list>
        <var-dialog v-model:show="apiKeyStatus" @confirm="confirmApiKey">
            <var-input placeholder="请输入API KEY" v-model="apiKey" />
        </var-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSettingStore } from '@/store/modules/setting'
export default defineComponent({
    setup() {
        const store = useSettingStore()
        const apiKey = ref(store.getSetting("api_key"))
        const apiKeyStatus = ref(false)
        const showApiKey = () => {
            apiKeyStatus.value = !apiKeyStatus.value
        }
        const confirmApiKey = () => {
            store.setSetting({
                key: "api_key",
                val: apiKey.value,
            })
        }
        return { apiKey, apiKeyStatus, showApiKey, confirmApiKey }
    }
})
</script>

<style scoped>

</style>
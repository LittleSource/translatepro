import { defineStore } from "pinia";
type setting = {
    key: string
    val: string
}
export const useSettingStore = defineStore('setting', {
    state: () => {
        const setting = new Map<string, string>
        return {
            setting,
        }
    },
    actions: {
        setSetting(s: setting) {
            this.$state.setting.set(s.key, s.val)
        },
        getSetting(key: string): string {
            return this.$state.setting.has(key) ? this.$state.setting.get(key) as string : ""
        }
    }
})
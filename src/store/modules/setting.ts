import { defineStore } from "pinia";
import { ipcRenderer } from 'electron'
type setting = {
    key: string
    val: string
}
export const useSettingStore = defineStore('setting', {
    state: () => {
        const setting: any = {}
        return {
            setting,
        }
    },
    actions: {
        setSetting(s: setting) {
            this.$state.setting[s.key] = s.val
            ipcRenderer.invoke('setStorage', 'setting', JSON.stringify(this.$state.setting));
        },
        getSetting(key: string): string {
            return this.$state.setting[key] ? this.$state.setting[key] : ""
        },
        async restSetting() {
            await ipcRenderer.invoke('setStorage', 'setting', "");
            this.$state.setting = {}
        },
        async initSetting() {
            const settingStr = await ipcRenderer.invoke('getStorage', 'setting')
            if ((settingStr as string).length > 0) {
                this.$state.setting = JSON.parse(settingStr)
            }
        }
    }
})
import { defineStore } from 'pinia'

type history = {
    form: string
    to: string
    time: number
}

export const useHistoryStore = defineStore('history', {
    state: () => {
        const history: history[] = []
        return {
            history,
        }
    },
    actions: {
        addRow(row: history) {
            this.$state.history.push(row)
        }
    }
})
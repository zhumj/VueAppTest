import { defineStore } from 'pinia'

export const appStore = defineStore(
  'App',
  {
    state: () => (
      {
        isGrayMode: false
      }
    ),
    actions: {
      changeGrayMode() {
        this.isGrayMode = !this.isGrayMode
      }
    },
    getters: {
      getGrayMode(state) {
        return state.isGrayMode
      }
    }
  }
)

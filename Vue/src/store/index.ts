import { defineStore } from 'pinia'

export const appStore = defineStore(
  'App',
  {
    state: () => (
      {
        isGrayMode: false,
        font: 'SSZH'
      }
    ),
    actions: {
      changeGrayMode() {
        this.isGrayMode = !this.isGrayMode
      },
      changeFont(font: string) {
        this.font = font
      }
    },
    getters: {
      getGrayMode(state) {
        return state.isGrayMode
      },
      getFont(state) {
        return state.font
      }
    }
  }
)

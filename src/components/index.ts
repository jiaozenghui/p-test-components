import type { Component, App } from 'vue'
import LText from './LText.vue'

declare interface ElementDataProps<T = any> {
  [key: string]: T
}
const globalComponents: ElementDataProps<Component> = {
  LText
}

export default {
  install(app: App) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
  }
}

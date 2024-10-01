import type { App } from 'vue'
import LText from './LText.vue'

LText.install = (app: App) => {
  if (!LText.name) {
    return
  }
  app.component(LText.name, LText)
}

export default LText

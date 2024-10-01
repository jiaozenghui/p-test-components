import { App } from 'vue'
import LImage from './LImage.vue'
LImage.install = (app: App) => {
  if (!LImage.name) {
    return
  }
  app.component(LImage.name, LImage)
}

export default LImage

import { App } from 'vue'
import FinalPage from './FinalPage.vue'

FinalPage.install = (app: App) => {
  if (!FinalPage.name) {
    return
  }
  app.component(FinalPage.name, FinalPage)
}

export default FinalPage

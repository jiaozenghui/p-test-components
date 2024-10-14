import type { App } from 'vue'
export * from './defaultProps'

import LText from './components/LText'
import LImage from './components/LImage'
import LShape from './components/LShape'
import FinalPage from './components/FinalPage'
const components = { LText, LImage, LShape, FinalPage }

const install = (app: App) => {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key])
  })
}

export { install, LText, LImage, LShape, FinalPage }

export default {
  install
}

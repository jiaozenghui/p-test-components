import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PTestUI from './index'

const app = createApp(App)

app.use(PTestUI)

app.mount('#app')

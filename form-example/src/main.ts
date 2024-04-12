import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import formStore from './store/FormStore.ts'

const app = createApp(App)

app.use(router)
app.use(formStore)

app.mount('#app')
